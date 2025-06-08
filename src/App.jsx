import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Menu, 
  X, 
  Leaf, 
  Brain, 
  Camera, 
  Bot, 
  Smartphone, 
  Wifi, 
  TrendingDown, 
  Clock, 
  Shield, 
  BarChart3,
  CheckCircle,
  ArrowRight,
  Mail,
  Phone,
  MapPin
} from 'lucide-react'
import { motion } from 'framer-motion'
import zeraaLogo from './assets/zeraatech-logo.png'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src={zeraaLogo} alt="Zeraatech" className="h-10 w-auto" />
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
              <a href="#alhariss" className="text-foreground hover:text-primary transition-colors">AL HARISS</a>
              <a href="#features" className="text-foreground hover:text-primary transition-colors">Features</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
              <Button className="bg-primary hover:bg-primary/90">Get Started</Button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.nav 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden mt-4 pb-4 border-t pt-4"
            >
              <div className="flex flex-col space-y-4">
                <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
                <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
                <a href="#alhariss" className="text-foreground hover:text-primary transition-colors">AL HARISS</a>
                <a href="#features" className="text-foreground hover:text-primary transition-colors">Features</a>
                <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
                <Button className="bg-primary hover:bg-primary/90 w-fit">Get Started</Button>
              </div>
            </motion.nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-gradient pt-24 pb-16 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
                🌱 Revolutionizing Agriculture with AI
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 text-gradient leading-tight"
              variants={fadeInUp}
            >
              Smart Farming for a Sustainable Future
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              Empowering farmers with AI-powered plant health monitoring, IoT integration, and robotics to maximize yields while minimizing environmental impact.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              variants={fadeInUp}
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                Discover AL HARISS
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Watch Demo
              </Button>
            </motion.div>

            <motion.div 
              className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">95%</div>
                <div className="text-muted-foreground">Disease Detection Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50%</div>
                <div className="text-muted-foreground">Reduction in Crop Loss</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">30%</div>
                <div className="text-muted-foreground">Less Pesticide Usage</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                About Zeraatech
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We are an innovative agritech startup focused on revolutionizing traditional farming through the integration of cutting-edge technologies.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInUp}>
                <h3 className="text-2xl font-bold mb-6 text-primary">Our Mission</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  To empower farmers by making precision agriculture accessible, efficient, and scalable, regardless of farm size or location. We believe that technology should serve as a bridge between traditional farming wisdom and modern innovation.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <Brain className="mx-auto mb-2 text-primary" size={32} />
                    <div className="font-semibold">AI Technology</div>
                  </div>
                  <div className="text-center p-4 bg-secondary/5 rounded-lg">
                    <Wifi className="mx-auto mb-2 text-secondary" size={32} />
                    <div className="font-semibold">IoT Integration</div>
                  </div>
                  <div className="text-center p-4 bg-accent/5 rounded-lg">
                    <Bot className="mx-auto mb-2 text-accent-foreground" size={32} />
                    <div className="font-semibold">Robotics</div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold mb-6 text-primary">Why Choose Zeraatech?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="text-primary mt-1" size={20} />
                      <div>
                        <div className="font-semibold">Precision Agriculture</div>
                        <div className="text-muted-foreground">Advanced monitoring and analysis for optimal crop health</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="text-primary mt-1" size={20} />
                      <div>
                        <div className="font-semibold">Scalable Solutions</div>
                        <div className="text-muted-foreground">Suitable for farms of all sizes and types</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="text-primary mt-1" size={20} />
                      <div>
                        <div className="font-semibold">Real-time Insights</div>
                        <div className="text-muted-foreground">Instant alerts and actionable recommendations</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AL HARISS Product Section */}
      <section id="alhariss" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <Badge className="mb-4 bg-primary text-primary-foreground">
                🤖 Our Flagship Product
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                Meet AL HARISS
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Your AI-powered plant health monitoring solution designed to identify diseases in fruits, vegetables, and herbs with unprecedented precision.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-12"
              variants={fadeInUp}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-6 text-primary">Smart Guardian for Your Crops</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    AL HARISS acts as a vigilant guardian for your crops, ensuring timely detection of threats that can harm plant health and reduce yields. Using advanced computer vision and deep learning models trained on thousands of annotated crop disease images.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Early disease detection with 95% accuracy</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Real-time monitoring and alerts</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Multi-crop support and analysis</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-2xl text-white">
                    <Leaf className="mb-4" size={48} />
                    <h4 className="text-xl font-bold mb-2">AI-Powered Detection</h4>
                    <p className="opacity-90">
                      Advanced algorithms analyze plant health in real-time, detecting diseases before they become visible to the human eye.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Deployment Modes */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-3xl font-bold text-center mb-12 text-primary">Deployment Modes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Camera className="text-primary" size={32} />
                      <CardTitle>Surveillance Cameras</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Fixed-position cameras installed in fields or greenhouses continuously monitor plants in real time, providing 24/7 surveillance of crop health.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Bot className="text-primary" size={32} />
                      <CardTitle>Autonomous Robots</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Mobile robots equipped with cameras and sensors patrol the field to inspect crops from all angles, even in hard-to-reach areas.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                Powerful Features
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive tools and capabilities designed to transform your farming operations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div variants={fadeInUp}>
                <Card className="card-hover h-full">
                  <CardHeader>
                    <Brain className="text-primary mb-4" size={48} />
                    <CardTitle>AI-Powered Detection</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Computer vision and deep learning models trained on thousands of annotated crop disease images for accurate detection.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="card-hover h-full">
                  <CardHeader>
                    <Smartphone className="text-primary mb-4" size={48} />
                    <CardTitle>Real-Time Alerts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Instant notifications on smartphones or dashboards when diseases are detected, with actionable treatment recommendations.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="card-hover h-full">
                  <CardHeader>
                    <Wifi className="text-primary mb-4" size={48} />
                    <CardTitle>IoT Integration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Connects with field-deployed IoT devices to correlate visual symptoms with real-time environmental data.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="card-hover h-full">
                  <CardHeader>
                    <Leaf className="text-primary mb-4" size={48} />
                    <CardTitle>Multi-Crop Support</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Trained to detect diseases across various crops including tomatoes, cucumbers, peppers, mint, basil, and more.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                Measurable Benefits
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Real impact on your farming operations with quantifiable results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div variants={fadeInUp}>
                <div className="bg-white p-8 rounded-2xl text-center card-hover">
                  <TrendingDown className="mx-auto mb-4 text-primary" size={48} />
                  <h3 className="text-2xl font-bold mb-2 text-primary">Reduces Crop Loss</h3>
                  <p className="text-muted-foreground">
                    Early detection prevents disease spread, significantly reducing crop loss and protecting your investment.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <div className="bg-white p-8 rounded-2xl text-center card-hover">
                  <Shield className="mx-auto mb-4 text-primary" size={48} />
                  <h3 className="text-2xl font-bold mb-2 text-primary">Minimizes Pesticides</h3>
                  <p className="text-muted-foreground">
                    Targeted interventions reduce unnecessary pesticide usage, promoting sustainable farming practices.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <div className="bg-white p-8 rounded-2xl text-center card-hover">
                  <Clock className="mx-auto mb-4 text-primary" size={48} />
                  <h3 className="text-2xl font-bold mb-2 text-primary">Saves Time & Labor</h3>
                  <p className="text-muted-foreground">
                    Automated surveillance eliminates manual inspection, freeing up valuable time and resources.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <div className="bg-white p-8 rounded-2xl text-center card-hover">
                  <BarChart3 className="mx-auto mb-4 text-primary" size={48} />
                  <h3 className="text-2xl font-bold mb-2 text-primary">Improves Quality</h3>
                  <p className="text-muted-foreground">
                    Consistent monitoring ensures higher yield quality and better market value for your crops.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                Ready to Transform Your Farm?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Join the agricultural revolution with Zeraatech. Contact us today to learn how AL HARISS can benefit your farming operations.
              </p>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 md:p-12 rounded-3xl"
              variants={fadeInUp}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-primary">Get in Touch</h3>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <Mail className="text-primary" size={24} />
                      <div>
                        <div className="font-semibold">Email</div>
                        <div className="text-muted-foreground">salah.eddine.seecs@gmail.com</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Phone className="text-primary" size={24} />
                      <div>
                        <div className="font-semibold">Phone</div>
                        <div className="text-muted-foreground">+212 620410317</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <MapPin className="text-primary" size={24} />
                      <div>
                        <div className="font-semibold">Address</div>
                        <div className="text-muted-foreground">Rabat, Morocco</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-6 text-primary">Request a Demo</h3>
                  <div className="space-y-4">
                    <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                      Schedule Demo
                      <ArrowRight className="ml-2" size={20} />
                    </Button>
                    <Button variant="outline" size="lg" className="w-full">
                      Download Brochure
                    </Button>
                    <p className="text-sm text-muted-foreground text-center">
                      See AL HARISS in action and discover how it can revolutionize your farming operations.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img src={zeraaLogo} alt="Zeraatech" className="h-10 w-auto mb-4 brightness-0 invert" />
              <p className="text-primary-foreground/80">
                Revolutionizing agriculture through AI, IoT, and robotics for a sustainable future.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Products</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>AL HARISS</li>
                <li>Disease Detection</li>
                <li>IoT Sensors</li>
                <li>Autonomous Robots</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>About Us</li>
                <li>Careers</li>
                <li>News</li>
                <li>Contact</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Documentation</li>
                <li>Help Center</li>
                <li>Community</li>
                <li>Training</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/80">
            <p>&copy; 2025 Zeraatech. All rights reserved. Empowering farmers with intelligent agriculture solutions.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

