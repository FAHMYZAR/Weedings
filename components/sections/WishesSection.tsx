import React, { useState, useEffect } from 'react';
import { Send, MessageSquare, X, Copy } from 'lucide-react';
import { Wish } from '../../types';
import { sanitizeInput, validateInput } from '../../utils/security';
import { formatTimestamp } from '../../utils/timeFormat';

const WishesSection: React.FC = () => {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentType, setPaymentType] = useState<'bca' | 'bri' | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Load wishes from JSON file
  useEffect(() => {
    const loadWishes = async () => {
      try {
        const response = await fetch('/wishes.json');
        if (response.ok) {
          const data = await response.json();
          setWishes(data);
        }
      } catch (error) {
        console.error('Failed to load wishes:', error);
      }
    };
    loadWishes();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!name.trim() || !message.trim()) {
      setError('Nama dan ucapan harus diisi');
      return;
    }

    // Validate input for security
    if (!validateInput(name, message)) {
      setError('Input tidak valid atau terlalu panjang');
      return;
    }

    setIsLoading(true);

    try {
      // Sanitize input
      const sanitizedName = sanitizeInput(name);
      const sanitizedMessage = sanitizeInput(message);

      const newWish: Wish = {
        id: Date.now().toString(),
        name: sanitizedName,
        message: sanitizedMessage,
        timestamp: new Date().toISOString()
      };

      // Add to local state immediately for better UX
      setWishes(prev => [newWish, ...prev]);
      
      // Save to JSON file via API
      console.log('Sending wish to API:', newWish);
      const response = await fetch('/api/wishes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newWish),
      });
      
      console.log('API response status:', response.status);
      if (!response.ok) {
        const errorData = await response.json();
        console.error('API error:', errorData);
        throw new Error('Failed to save wish');
      }
      
      const result = await response.json();
      console.log('API result:', result);
      
      setName('');
      setMessage('');
    } catch (error) {
      setError('Gagal mengirim ucapan. Silakan coba lagi.');
      console.error('Failed to save wish:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const openPaymentModal = (type: 'bca' | 'bri') => {
    setPaymentType(type);
    setShowPaymentModal(true);
  };

  const closePaymentModal = () => {
    setShowPaymentModal(false);
    setPaymentType(null);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      // Optional: show success message
      console.log('Copied to clipboard:', text);
    }).catch(err => {
      console.error('Failed to copy:', err);
    });
  };

  return (
    <div className="min-h-screen pt-20 pb-32 px-6 flex flex-col items-center bg-stone-50">
      <div className="text-center mb-8 animate-fade-up">
        <h2 className="font-cinzel text-2xl text-java-dark mb-2">Doa & Ucapan</h2>
        <div className="h-1 w-12 bg-java-gold mx-auto rounded-full"></div>
      </div>

      <div className="w-full max-w-sm space-y-8">
        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-lg border border-stone-100 animate-fade-up">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-xs font-bold text-java-brown mb-1 uppercase tracking-wide">Nama</label>
              <input 
                type="text" 
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={50}
                className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-java-gold/50 transition-all font-sans"
                placeholder="Nama Anda (max 50 karakter)"
                disabled={isLoading}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-bold text-java-brown mb-1 uppercase tracking-wide">Ucapan</label>
              <textarea 
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                maxLength={500}
                rows={3}
                className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-java-gold/50 transition-all font-sans"
                placeholder="Tulis doa dan harapan... (max 500 karakter)"
                disabled={isLoading}
              />
            </div>
            
            {error && (
              <div className="text-red-600 text-xs bg-red-50 p-2 rounded border border-red-200">
                {error}
              </div>
            )}
            
            <button 
              type="submit"
              disabled={isLoading}
              className="w-full bg-java-dark text-white py-3 rounded-lg font-bold text-sm hover:bg-java-brown transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={16} />
              {isLoading ? 'Mengirim...' : 'Kirim Ucapan'}
            </button>
            
            {/* Payment Links */}
            <div className="mt-4 text-center">
              <button 
                type="button"
                onClick={() => openPaymentModal('bca')}
                className="text-java-brown hover:text-java-dark font-bold text-sm underline"
              >
                BCA
              </button>
              <span className="mx-2 text-stone-400">|</span>
              <button 
                type="button"
                onClick={() => openPaymentModal('bri')}
                className="text-java-brown hover:text-java-dark font-bold text-sm underline"
              >
                BRI
              </button>
            </div>
          </div>
        </form>

        {/* List */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-stone-400 uppercase tracking-wider text-center flex items-center justify-center gap-2">
            <MessageSquare size={14} />
            {wishes.length} Ucapan Masuk
          </h3>
          
          <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
            {wishes.map((wish, index) => (
              <div key={wish.id} className="bg-white p-4 rounded-xl shadow-sm border border-stone-100 animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-java-dark text-sm">{wish.name}</h4>
                    <span className="text-[10px] text-stone-400 bg-stone-100 px-2 py-1 rounded-full">{formatTimestamp(wish.timestamp)}</span>
                </div>
                <p className="text-sm text-stone-600 font-serif leading-relaxed" dangerouslySetInnerHTML={{ __html: `"${wish.message}"` }}></p>
                <div className="flex items-center gap-1 mt-2">
                    <div className="w-1 h-1 rounded-full bg-java-gold"></div>
                    <div className="h-px w-full bg-stone-100"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-java-cream rounded-2xl p-6 max-w-sm w-full relative animate-fade-up">
            <button 
              onClick={closePaymentModal}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-600"
            >
              <X size={20} />
            </button>
            
            <div className="text-center">
              <h3 className="font-cinzel text-xl text-java-dark mb-4">
                {paymentType === 'bca' ? 'Transfer BCA' : 'Transfer BRI'}
              </h3>
              
              {paymentType === 'bca' ? (
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-java-gold/20">
                    <p className="text-sm text-stone-600 mb-2">Nomor Rekening BCA:</p>
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => copyToClipboard('3690123567')}
                        className="text-java-brown hover:text-java-dark transition-colors"
                        title="Copy nomor rekening"
                      >
                        <Copy size={16} />
                      </button>
                      <p className="font-mono text-lg font-bold text-java-dark">3690123567</p>
                    </div>
                  </div>
                  <p className="text-xs text-stone-500 italic">Klik icon untuk menyalin nomor rekening</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-java-gold/20">
                    <p className="text-sm text-stone-600 mb-2">Nomor Rekening BRI:</p>
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => copyToClipboard('12030100262150')}
                        className="text-java-brown hover:text-java-dark transition-colors"
                        title="Copy nomor rekening"
                      >
                        <Copy size={16} />
                      </button>
                      <p className="font-mono text-lg font-bold text-java-dark">1203 0100 2621 502</p>
                    </div>
                  </div>
                  <p className="text-xs text-stone-500 italic">Klik icon untuk menyalin nomor rekening</p>
                </div>
              )}
              
              <button 
                onClick={closePaymentModal}
                className="mt-6 px-6 py-2 bg-java-brown text-white rounded-lg font-bold text-sm hover:bg-java-dark transition-colors"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WishesSection;