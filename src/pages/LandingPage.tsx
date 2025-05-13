
import { Link } from 'react-router-dom';
import GradientBackground from '@/components/GradientBackground';
import Button from '@/components/Button';
import { ArrowRight, Leaf, Brain, BookOpen } from 'lucide-react';

const LandingPage = () => {
  return (
    <GradientBackground>
      <div className="container mx-auto px-4 pt-32 pb-20">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
            Explore Interactive 3D Models
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Visualize, interact, and explore detailed 3D models in a completely immersive experience.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="gradient" size="lg" to="/dashboard" className="group">
              Get Started 
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
        
        {/* What is This Project About? Section */}
        <div className="mt-32 max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in" style={{animationDelay: '300ms'}}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What is This Project About?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              This platform allows users to explore interactive 3D models of plants to enhance their understanding of plant structure, 
              function, and diversity. It's designed to be an engaging learning tool for students, educators, and plant enthusiasts alike.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 flex flex-col items-center text-center animate-fade-in" style={{animationDelay: '400ms'}}>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Leaf className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-3">Explore Realistic 3D Models</h3>
              <p className="text-muted-foreground">
                Interact with highly detailed plant models that showcase every aspect of their structure.
              </p>
            </div>
            
            <div className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 flex flex-col items-center text-center animate-fade-in" style={{animationDelay: '500ms'}}>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Brain className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-3">Learn by Interaction</h3>
              <p className="text-muted-foreground">
                Engage with plants in a hands-on way that enhances understanding and retention of botanical concepts.
              </p>
            </div>
            
            <div className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 flex flex-col items-center text-center animate-fade-in" style={{animationDelay: '600ms'}}>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-3">Educational & Engaging</h3>
              <p className="text-muted-foreground">
                Designed with learning in mind, making botanical education more accessible and enjoyable.
              </p>
            </div>
          </div>
        </div>
        
        {/* Features Section */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl border border-border bg-card animate-fade-in" style={{animationDelay: '200ms'}}>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
              <div className="w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-md"></div>
            </div>
            <h3 className="text-xl font-medium mb-3">Immersive Viewing</h3>
            <p className="text-muted-foreground">
              Explore every detail with interactive 360° viewing and zoom capabilities.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-border bg-card animate-fade-in" style={{animationDelay: '400ms'}}>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
              <div className="w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-md"></div>
            </div>
            <h3 className="text-xl font-medium mb-3">Detailed Analysis</h3>
            <p className="text-muted-foreground">
              Examine complex 3D models with powerful analysis tools and annotations.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-border bg-card animate-fade-in" style={{animationDelay: '600ms'}}>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
              <div className="w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-md"></div>
            </div>
            <h3 className="text-xl font-medium mb-3">Collaborative Tools</h3>
            <p className="text-muted-foreground">
              Share insights and collaborate with team members in real-time.
            </p>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-32 mb-10 p-10 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm border border-primary/20 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to explore?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of professionals already using our platform for immersive 3D visualization.
          </p>
          <Button variant="gradient" size="lg" to="/dashboard">
            Get Started Now
          </Button>
        </div>
      </div>
    </GradientBackground>
  );
};

export default LandingPage;
