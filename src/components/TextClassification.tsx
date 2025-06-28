
import { useState, useRef, useEffect } from 'react';
import { MessageSquare, Sparkles, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';

const TextClassification = () => {
  const [inputText, setInputText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<{
    sentiment: string;
    confidence: number;
    emotions: Array<{ label: string; score: number; color: string }>;
    suggestions: string[];
  } | null>(null);
  const [exampleIndex, setExampleIndex] = useState(0);

  const examples = [
    "I absolutely love this new product! It's amazing and works perfectly.",
    "This is the worst experience I've ever had. Completely disappointed.",
    "The weather today is quite nice, perfect for a walk in the park.",
    "I'm feeling anxious about the upcoming presentation tomorrow.",
    "This movie was okay, nothing special but not terrible either."
  ];

  // Simulate AI text classification
  const analyzeText = async (text: string) => {
    if (!text.trim()) return;
    
    setIsAnalyzing(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Simple sentiment analysis simulation
    const positiveWords = ['love', 'amazing', 'perfect', 'great', 'excellent', 'wonderful', 'fantastic', 'awesome', 'brilliant', 'outstanding'];
    const negativeWords = ['hate', 'terrible', 'awful', 'worst', 'horrible', 'disappointed', 'bad', 'disgusting', 'annoying'];
    const anxietyWords = ['anxious', 'worried', 'nervous', 'stressed', 'concerned', 'afraid'];
    const joyWords = ['happy', 'excited', 'thrilled', 'delighted', 'cheerful', 'joyful'];
    
    const words = text.toLowerCase().split(/\s+/);
    
    let positiveScore = 0;
    let negativeScore = 0;
    let anxietyScore = 0;
    let joyScore = 0;
    
    words.forEach(word => {
      if (positiveWords.some(pw => word.includes(pw))) positiveScore++;
      if (negativeWords.some(nw => word.includes(nw))) negativeScore++;
      if (anxietyWords.some(aw => word.includes(aw))) anxietyScore++;
      if (joyWords.some(jw => word.includes(jw))) joyScore++;
    });
    
    // Determine primary sentiment
    let sentiment = 'Neutral';
    let confidence = 0.7;
    
    if (positiveScore > negativeScore) {
      sentiment = 'Positive';
      confidence = Math.min(0.95, 0.6 + (positiveScore * 0.1));
    } else if (negativeScore > positiveScore) {
      sentiment = 'Negative';
      confidence = Math.min(0.95, 0.6 + (negativeScore * 0.1));
    }
    
    // Generate emotion scores
    const emotions = [
      { label: 'Joy', score: Math.max(0.1, (joyScore + positiveScore) * 0.2), color: 'bg-yellow-500' },
      { label: 'Sadness', score: Math.max(0.1, negativeScore * 0.25), color: 'bg-blue-500' },
      { label: 'Anxiety', score: Math.max(0.1, anxietyScore * 0.3), color: 'bg-red-500' },
      { label: 'Confidence', score: Math.max(0.1, positiveScore * 0.2), color: 'bg-green-500' },
      { label: 'Neutrality', score: Math.max(0.1, words.length > 5 ? 0.4 : 0.6), color: 'bg-gray-500' }
    ].map(emotion => ({
      ...emotion,
      score: Math.min(0.95, emotion.score)
    })).sort((a, b) => b.score - a.score);
    
    // Generate suggestions
    const suggestions = [];
    if (sentiment === 'Negative') {
      suggestions.push('Consider reframing with more positive language');
      suggestions.push('Focus on solutions rather than problems');
    } else if (sentiment === 'Positive') {
      suggestions.push('Great positive tone! This resonates well');
      suggestions.push('Consider sharing this positive energy');
    } else {
      suggestions.push('Try adding more specific emotions or opinions');
      suggestions.push('Consider what you want the reader to feel');
    }
    
    setResults({
      sentiment,
      confidence,
      emotions,
      suggestions
    });
    
    setIsAnalyzing(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setExampleIndex((prev) => (prev + 1) % examples.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="text-classification" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-800/30 to-blue-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            AI Text <span className="text-blue-400">Analysis</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Experience real-time sentiment analysis and emotion detection powered by advanced NLP models
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Input Section */}
          <div className="space-y-6">
            <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <MessageSquare className="w-8 h-8 text-blue-400" />
                Text Input
              </h3>
              
              <div className="space-y-4">
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Enter your text here for sentiment analysis..."
                  rows={6}
                  className="w-full bg-slate-800/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none"
                />
                
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => analyzeText(inputText)}
                    disabled={!inputText.trim() || isAnalyzing}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-all duration-300 flex items-center gap-2"
                  >
                    {isAnalyzing ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-5 h-5" />
                        Analyze Text
                      </>
                    )}
                  </button>
                  
                  <button
                    onClick={() => setInputText(examples[exampleIndex])}
                    className="px-6 py-3 bg-slate-600 hover:bg-slate-700 text-white rounded-lg font-medium transition-all duration-300"
                  >
                    Try Example
                  </button>
                </div>
              </div>
            </div>

            {/* Examples Preview */}
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50">
              <h4 className="text-lg font-semibold text-white mb-3">Example Text:</h4>
              <p className="text-gray-300 text-sm italic">
                "{examples[exampleIndex]}"
              </p>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {results ? (
              <>
                {/* Sentiment Result */}
                <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-700/50">
                  <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                    <TrendingUp className="w-8 h-8 text-green-400" />
                    Sentiment Analysis
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300 text-lg">Overall Sentiment:</span>
                      <div className={`px-4 py-2 rounded-full font-medium ${
                        results.sentiment === 'Positive' ? 'bg-green-600/20 text-green-400' :
                        results.sentiment === 'Negative' ? 'bg-red-600/20 text-red-400' :
                        'bg-gray-600/20 text-gray-400'
                      }`}>
                        {results.sentiment}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Confidence Level:</span>
                        <span className="text-blue-400 font-mono">
                          {(results.confidence * 100).toFixed(1)}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
                        <div 
                          className="h-3 bg-gradient-to-r from-blue-500 to-green-400 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${results.confidence * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Emotion Breakdown */}
                <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-700/50">
                  <h4 className="text-xl font-semibold text-white mb-6">Emotion Breakdown</h4>
                  
                  <div className="space-y-3">
                    {results.emotions.map((emotion, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300 font-medium">{emotion.label}</span>
                          <span className="text-blue-400 font-mono text-sm">
                            {(emotion.score * 100).toFixed(0)}%
                          </span>
                        </div>
                        <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                          <div 
                            className={`h-2 ${emotion.color} rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${emotion.score * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Suggestions */}
                <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                    AI Suggestions
                  </h4>
                  <ul className="space-y-2">
                    {results.suggestions.map((suggestion, index) => (
                      <li key={index} className="text-gray-300 text-sm flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-700/50 text-center">
                <AlertCircle className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-300 mb-2">Ready to Analyze</h3>
                <p className="text-gray-400">
                  Enter some text and click "Analyze Text" to see the AI-powered sentiment analysis results
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextClassification;
