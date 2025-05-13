
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Button from '@/components/Button';
import { Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form validation would go here in a real implementation
    
    // Show success message
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitted(true);
    
    // Reset submitted state after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/10 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 animate-fade-in">
            <div className="flex justify-center mb-5">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                <Mail className="w-6 h-6 text-primary" />
              </span>
            </div>
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Have questions, feedback, or collaboration ideas? We'd love to hear from you!
            </p>
          </div>

          <form 
            onSubmit={handleSubmit}
            className="space-y-6 bg-card/80 backdrop-blur-sm p-8 rounded-xl border border-border shadow-sm organic-shadow animate-fade-in"
            style={{ animationDelay: '100ms' }}
          >
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium">
                Full Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full transition-all focus-visible:ring-primary/50"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium">
                Email Address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="w-full transition-all focus-visible:ring-primary/50"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here..."
                className="w-full min-h-[120px] transition-all focus-visible:ring-primary/50"
                required
              />
            </div>
            
            <div className="pt-2">
              <Button 
                type="submit"
                variant="gradient" 
                size="lg"
                className="w-full md:w-auto transition-all hover:shadow-lg"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
