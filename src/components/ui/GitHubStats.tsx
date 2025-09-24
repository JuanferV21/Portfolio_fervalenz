'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from './Icon';

interface GitHubStatsProps {
  username: string;
  className?: string;
}

interface GitHubData {
  public_repos: number;
  followers: number;
  following: number;
  total_commits?: number;
  stars?: number;
}

export default function GitHubStats({ username, className = '' }: GitHubStatsProps) {
  const [stats, setStats] = useState<GitHubData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        setLoading(true);
        setError(false);

        const response = await fetch(`https://api.github.com/users/${username}`, {
          headers: {
            'Accept': 'application/vnd.github.v3+json',
          },
        });

        if (!response.ok) {
          // Handle different HTTP status codes gracefully
          if (response.status === 404) {
            console.warn(`GitHub user '${username}' not found. Using fallback data.`);
          } else if (response.status === 403) {
            console.warn('GitHub API rate limit exceeded. Using fallback data.');
          } else {
            console.warn(`GitHub API error (${response.status}). Using fallback data.`);
          }
          throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();

        // Fetch additional repo data for stars count
        let totalStars = 0;
        try {
          const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=stars`, {
            headers: {
              'Accept': 'application/vnd.github.v3+json',
            },
          });

          if (reposResponse.ok) {
            const repos = await reposResponse.json();
            totalStars = repos.reduce((sum: number, repo: { stargazers_count: number }) => sum + repo.stargazers_count, 0);
          }
        } catch {
          // If repos fetch fails, continue with 0 stars
          console.warn('Failed to fetch repository data, using 0 stars');
        }

        setStats({
          public_repos: data.public_repos,
          followers: data.followers,
          following: data.following,
          stars: totalStars
        });

        setError(false);
      } catch {
        // Don't log the error as an error since we handle it gracefully
        setError(true);
        // Set realistic fallback data for demo
        setStats({
          public_repos: 25,
          followers: 150,
          following: 80,
          stars: 342
        });
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchGitHubStats();
    }
  }, [username]);

  const statsCards = [
    {
      label: 'Repositories',
      value: stats?.public_repos || 0,
      icon: 'repository' as const
    },
    {
      label: 'Stars Earned',
      value: stats?.stars || 0,
      icon: 'star' as const
    },
    {
      label: 'Followers',
      value: stats?.followers || 0,
      icon: 'users' as const
    },
    {
      label: 'Following',
      value: stats?.following || 0,
      icon: 'following' as const
    }
  ];

  if (loading) {
    return (
      <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 ${className}`}>
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-white rounded-xl p-6 shadow-sm animate-pulse">
            <div className="h-8 bg-slate-200 rounded mb-2"></div>
            <div className="h-6 bg-slate-200 rounded w-16"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 ${className}`}>
      {statsCards.map((card, index) => (
        <motion.div
          key={card.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-gray-50 border border-gray-200 p-6 hover:bg-gray-100 transition-all duration-200"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 bg-black text-white flex items-center justify-center">
              <Icon name={card.icon} size="md" />
            </div>
            {error && (
              <div className="text-xs text-gray-600 bg-gray-200 px-2 py-1">
                Demo
              </div>
            )}
          </div>

          <div className="space-y-1">
            <div className="text-2xl font-light text-black">
              {card.value.toLocaleString()}
            </div>
            <div className="text-sm text-gray-600 uppercase tracking-wide">
              {card.label}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}