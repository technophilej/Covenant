import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',

  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <div className="w-16 h-16 bg-brand-blue-100 rounded-full flex items-center justify-center mx-auto mb-6" suppressHydrationWarning>
              <CheckCircle2 className="w-8 h-8 text-brand-blue-700" suppressHydrationWarning />
            </div>
            <h3 className="text-2xl font-bold text-brand-navy mb-3">Message Sent!</h3>
            <p className="text-brand-navy/75 mb-6">
              Thank you for reaching out. We'll get back to you within 24 hours.
            </p>
            <Button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({ name: '', email: '', phone: '', message: '' });
              }}
              variant="outline"
            >
              Send Another Message
            </Button>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  required
                  className="h-12"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="h-12"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(207) 252-8470"
                className="h-12"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">How can we help? *</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your care needs or any questions you have..."
                required
                className="min-h-[150px] resize-none"
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 bg-gradient-to-r from-brand-blue-600 to-brand-blue-500 hover:from-brand-blue-700 hover:to-brand-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-brand-blue-600/20"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" suppressHydrationWarning />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" suppressHydrationWarning />
                  Send Message
                </>
              )}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}