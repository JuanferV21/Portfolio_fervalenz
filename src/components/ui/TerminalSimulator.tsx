'use client';

import { useState, useEffect, useRef } from 'react';

interface SequenceItem {
  type: 'wait' | 'type' | 'output' | 'newline';
  text?: string;
  duration?: number;
}

interface TerminalSimulatorProps {
  className?: string;
}

// Complete sequence of actions
const sequence: SequenceItem[] = [
  { type: 'wait', duration: 1000 },

  { type: 'type', text: 'whoami' },
  { type: 'output', text: 'fernando.valenzuela' },
  { type: 'wait', duration: 1000 },

  { type: 'type', text: 'pwd' },
  { type: 'output', text: '/home/fernando/dev-portfolio' },
  { type: 'wait', duration: 1000 },

  { type: 'type', text: 'cat personal.info' },
  { type: 'output', text: '# Fernando Valenzuela' },
  { type: 'output', text: 'Age: 21 años' },
  { type: 'output', text: 'Location: Guatemala 🇬🇹' },
  { type: 'output', text: 'Role: Full-Stack Developer' },
  { type: 'output', text: 'Status: Available for opportunities' },
  { type: 'wait', duration: 5000 }
];

export default function TerminalSimulator({ className = '' }: TerminalSimulatorProps) {
  const [step, setStep] = useState(0);
  const [displayLines, setDisplayLines] = useState<string[]>([]);
  const [typingText, setTypingText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const typingIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Cursor blinking
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Main sequence controller
  useEffect(() => {
    if (isPaused) return;

    // Clear any existing timeouts
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (typingIntervalRef.current) clearTimeout(typingIntervalRef.current);

    // Reset if we've reached the end
    if (step >= sequence.length) {
      timeoutRef.current = setTimeout(() => {
        setStep(0);
        setDisplayLines([]);
        setTypingText('');
        setIsTyping(false);
      }, 100);
      return;
    }

    const currentItem = sequence[step];

    switch (currentItem.type) {
      case 'wait':
        timeoutRef.current = setTimeout(() => {
          setStep(prev => prev + 1);
        }, currentItem.duration || 500);
        break;

      case 'type':
        if (currentItem.text) {
          setIsTyping(true);
          setTypingText('');

          let charIndex = 0;
          const typeText = () => {
            if (charIndex <= currentItem.text!.length) {
              setTypingText(currentItem.text!.slice(0, charIndex));
              charIndex++;
              typingIntervalRef.current = setTimeout(typeText, 80);
            } else {
              setIsTyping(false);
              // Immediately add completed command to display and move to next step
              setDisplayLines(prev => [...prev, `$ ${currentItem.text!}`]);
              setTypingText('');
              timeoutRef.current = setTimeout(() => {
                setStep(prev => prev + 1);
              }, 200);
            }
          };

          timeoutRef.current = setTimeout(typeText, 200);
        }
        break;

      case 'newline':
        // Skip newline step since we handle it in the type case
        setStep(prev => prev + 1);
        break;

      case 'output':
        setDisplayLines(prev => [...prev, currentItem.text || '']);
        timeoutRef.current = setTimeout(() => {
          setStep(prev => prev + 1);
        }, 200);
        break;
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (typingIntervalRef.current) clearTimeout(typingIntervalRef.current);
    };
  }, [step, isPaused]);

  return (
    <div
      className={`w-full h-full bg-black text-green-400 font-mono text-sm leading-relaxed p-6 flex flex-col ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Terminal header */}
      <div className="text-white mb-4 text-xs">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="ml-4 text-gray-400">fernando@portfolio:~</span>
        </div>
        <div className="h-px bg-gray-700 mb-4"></div>
      </div>

      {/* Terminal content */}
      <div className="flex-1 overflow-hidden space-y-1">
        {/* Display completed lines */}
        {displayLines.map((line, index) => (
          <div key={index} className="text-green-300">
            {line.startsWith('$ ') ? (
              <div className="flex items-center">
                <span className="text-white mr-2">$</span>
                <span className="text-green-400">{line.slice(2)}</span>
              </div>
            ) : (
              <div className="ml-4">{line || '\u00A0'}</div>
            )}
          </div>
        ))}

        {/* Current typing line */}
        {isTyping && (
          <div className="flex items-center">
            <span className="text-white mr-2">$</span>
            <span className="text-green-400">{typingText}</span>
            {showCursor && (
              <span className="bg-green-400 text-black ml-0.5 w-2 h-4 inline-block">
                &nbsp;
              </span>
            )}
          </div>
        )}

        {/* Empty prompt when waiting */}
        {!isTyping && step < sequence.length && (
          <div className="flex items-center">
            <span className="text-white mr-2">$</span>
            {showCursor && (
              <span className="bg-green-400 text-black w-2 h-4 inline-block">
                &nbsp;
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}