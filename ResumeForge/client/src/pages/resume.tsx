import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Twitter, 
  Download,
  Menu,
  User,
  Code,
  Server,
  Settings,
  GraduationCap,
  Award,
  Send,
  CheckCircle,
  X
} from "lucide-react";
import dogoImage from "@assets/dogo_1754454833233.png";

export default function Resume() {
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  // Handle form submission
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        throw new Error(data.error || "Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Download PDF functionality
  const downloadPDF = () => {
    window.print();
  };

  // Intersection Observer for active navigation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const profileData = {
    name: "Cujo Qt",
    initials: "CQ",
    title: "MC Mod & Community Manager",
    email: "business@cujoqt.com",
    phone: "",
    location: "Arizona",
    linkedin: "",
    summary: "Experienced Minecraft server moderator and community manager with extensive experience across multiple servers. Specialized in server moderation, community management, partnership coordination, and giveaway server management. Dedicated to creating positive gaming environments and fostering strong server communities.",
    stats: {
      experience: "1+",
      servers: "6",
      communities: "4250+"
    }
  };

  const experiences = [
    {
      title: "Senior Moderator",
      company: "Litsl SMP",
      period: "2025 - Present",
      location: "Minecraft Server",
      description: "Currently serving as Senior Moderator on Litsl SMP, responsible for maintaining server order, enforcing rules, and ensuring positive player experiences. Handle complex moderation cases and mentor junior staff members.",
      achievements: [],
      technologies: ["Discord", "Minecraft", "Server Management", "Community Building"]
    },
    {
      title: "Staff/Community Manager",
      company: "Giveaway Server",
      period: "2025 - Present",
      location: "Discord Community",
      description: "Manage staff operations and community engagement for a large giveaway server. Oversee giveaway events, coordinate staff activities, and ensure smooth community operations.",
      achievements: [],
      technologies: ["Discord Management", "Event Coordination", "Staff Management", "Giveaway Systems"]
    },
    {
      title: "Head Manager",
      company: "Steal a Brain Rot Middle Man Server",
      period: "2025 - Present",
      location: "Minecraft Server",
      description: "Led the management team for a specialized trading server, overseeing all server operations and middle-man services. Responsible for staff coordination, policy development, and ensuring secure trading environments.",
      achievements: [],
      technologies: ["Trade Management", "Discord Bots", "Security Protocols", "Team Leadership"]
    },
    {
      title: "Partnership Manager",
      company: "Amethyst Hangout",
      period: "2025 - Present",
      location: "Discord Community",
      description: "Manage server partnerships and collaborations with other communities. Negotiate partnership agreements, coordinate events, and maintain relationships with partner servers to expand community reach.",
      achievements: [],
      technologies: ["Partnership Development", "Event Management", "Community Growth", "Networking"]
    },
    {
      title: "Senior Helper",
      company: "Useless Schematic Server",
      period: "2025 - Present",
      location: "Minecraft Server",
      description: "Provided advanced player support and technical assistance for schematic-related services. Handled complex player inquiries and maintained server knowledge base for building and schematic systems.",
      achievements: [],
      technologies: ["WorldEdit", "Schematic Systems", "Player Support", "Documentation"]
    },
    {
      title: "Helper",
      company: "Coin SMP",
      period: "2025 - Present",
      location: "Minecraft Server",
      description: "Provide player assistance and basic moderation support on Coin SMP. Handle new player onboarding, answer questions, and assist with server features and economy systems.",
      achievements: [],
      technologies: ["Economy Systems", "Player Onboarding", "Basic Moderation", "Guide Creation"]
    }
  ];

  const skillCategories = [
    {
      name: "Server Configuration",
      icon: Server,
      description: "Technical Server Management",
      skills: [
        { name: "Server Configuration", level: 75 },
        { name: "Plugin Setup & Configuration", level: 70 },
        { name: "Minecraft Server Administration", level: 80 },
        { name: "Server Troubleshooting", level: 65 }
      ]
    },
    {
      name: "Community Management",
      icon: User,
      description: "Player Support & Engagement",
      skills: [
        { name: "Discord Moderation", level: 90 },
        { name: "Player Support", level: 85 },
        { name: "Community Building", level: 80 },
        { name: "Rule Enforcement", level: 88 }
      ]
    },
    {
      name: "Leadership",
      icon: Award,
      description: "Team & Partnership Management",
      skills: [
        { name: "Staff Training", level: 85 },
        { name: "Partnership Development", level: 88 },
        { name: "Team Coordination", level: 82 },
        { name: "Policy Development", level: 80 }
      ]
    },
    {
      name: "General IT",
      icon: Settings,
      description: "Basic Linux & Server Setup",
      skills: [
        { name: "Ubuntu Server Setup", level: 60 },
        { name: "Basic Linux Commands", level: 55 },
        { name: "Server Administration", level: 50 },
        { name: "System Configuration", level: 45 }
      ]
    }
  ];

  const additionalSkills = [
    "Discord Bots", "Server Plugins", "WorldEdit", "Economy Systems", "Anti-Cheat", "Backup Management",
    "Event Coordination", "Cross-Server Communication", "Trading Systems", "Partnership Negotiation", "Staff Management", "Documentation"
  ];

  const education = [
    {
      degree: "Server Management Training",
      field: "Minecraft Administration",
      school: "Self-Taught & Community Mentorship",
      period: "2020 - Present"
    }
  ];

  const certifications = [
    {
      name: "Advanced Discord Moderation",
      issuer: "Discord Community Guidelines",
      year: "2023"
    },
    {
      name: "Leadership & Team Management",
      issuer: "Gaming Community Leadership",
      year: "2022"
    },
    {
      name: "Partnership Development",
      issuer: "Community Growth Strategies",
      year: "2022"
    },
    {
      name: "Conflict Resolution",
      issuer: "Online Community Management",
      year: "2021"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="relative bg-white border-b border-gray-100 no-print sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">{profileData.initials}</span>
              </div>
              <span className="text-xl font-bold text-black">{profileData.name}</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["about", "experience", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-gray-700 hover:text-black transition-colors duration-300 font-medium capitalize ${
                    activeSection === section ? "text-black font-semibold" : ""
                  }`}
                >
                  {section}
                </button>
              ))}
              <Button onClick={downloadPDF} className="bg-black text-white hover:bg-gray-800">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-gray-100 py-4">
              <div className="flex flex-col space-y-4">
                {["about", "experience", "contact"].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="text-left text-gray-700 hover:text-black transition-colors duration-300 font-medium capitalize"
                  >
                    {section}
                  </button>
                ))}
                <Button onClick={downloadPDF} className="bg-black text-white hover:bg-gray-800 w-fit">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative bg-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative">
            {/* Floating bubbles */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-gray-100 rounded-full opacity-50 animate-float"></div>
            <div className="absolute top-32 right-20 w-16 h-16 bg-gray-200 rounded-full opacity-40 animate-float" style={{ animationDelay: "2s" }}></div>
            <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gray-150 rounded-full opacity-30 animate-float" style={{ animationDelay: "4s" }}></div>

            <div className="animate-fadeInUp">
              <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 gradient-text">
                {profileData.name}
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 font-medium">
                {profileData.title}
              </p>
              <div className="flex justify-center">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="bg-black text-white px-8 py-4 rounded-full bubble-shadow bubble-hover transition-all duration-300 cursor-pointer flex items-center"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  {profileData.email}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">About Me</h2>
            <div className="w-20 h-1 bg-black mx-auto rounded-full"></div>
          </div>

          <Card className="rounded-3xl bubble-shadow bubble-hover transition-all duration-300 p-8 md:p-12 animate-slideIn border-0">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-full h-96 bg-gray-200 rounded-3xl overflow-hidden">
                    <img 
                      src={dogoImage} 
                      alt="Cujo Qt" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {profileData.summary}
                  </p>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    When I'm not moderating servers, you can find me exploring new Minecraft servers, helping players 
                    with builds, or staying updated on the latest server management techniques. I believe in creating 
                    fair, fun environments where all players can enjoy their gaming experience.
                  </p>

                  <div className="grid grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-black">{profileData.stats.experience}</div>
                      <div className="text-gray-600 font-medium">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-black">{profileData.stats.servers}</div>
                      <div className="text-gray-600 font-medium">Servers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-black">{profileData.stats.communities}</div>
                      <div className="text-gray-600 font-medium">Community Members</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Experience</h2>
            <div className="w-20 h-1 bg-black mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <Card key={index} className="bg-gray-50 rounded-3xl bubble-shadow bubble-hover transition-all duration-300 p-8 md:p-10 border-0">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">{experience.title}</h3>
                      <p className="text-xl text-gray-600 font-medium">{experience.company}</p>
                    </div>
                    <div className="flex items-center space-x-4 mt-4 md:mt-0">
                      <div className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium">
                        {experience.period}
                      </div>
                      <div className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                        {experience.location}
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-gray-700 leading-relaxed">
                      {experience.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>





      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Skills</h2>
            <div className="w-20 h-1 bg-black mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="bg-gray-50 rounded-3xl bubble-shadow bubble-hover transition-all duration-300 p-6 border-0">
                <CardContent className="p-0">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4">
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-black">{category.name}</h3>
                      <p className="text-sm text-gray-600">{category.description}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Let's Connect</h2>
            <div className="w-20 h-1 bg-black mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <Card className="bg-white rounded-3xl bubble-shadow bubble-hover transition-all duration-300 p-8 md:p-10 border-0">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-black mb-8">Get In Touch</h3>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Email</p>
                      <a href={`mailto:${profileData.email}`} className="text-black font-bold hover:text-gray-700 transition-colors duration-300">
                        {profileData.email}
                      </a>
                    </div>
                  </div>


                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card className="bg-white rounded-3xl bubble-shadow bubble-hover transition-all duration-300 p-8 md:p-10 border-0">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-black mb-8">Send a Message</h3>

                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-gray-700 font-medium">First Name</Label>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                        className="mt-2 bg-gray-50 border-gray-200 rounded-2xl focus:border-black focus:bg-white transition-all duration-300"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-gray-700 font-medium">Last Name</Label>
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                        className="mt-2 bg-gray-50 border-gray-200 rounded-2xl focus:border-black focus:bg-white transition-all duration-300"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john.doe@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="mt-2 bg-gray-50 border-gray-200 rounded-2xl focus:border-black focus:bg-white transition-all duration-300"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-gray-700 font-medium">Subject</Label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="Project Inquiry"
                      value={formData.subject}
                      onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                      className="mt-2 bg-gray-50 border-gray-200 rounded-2xl focus:border-black focus:bg-white transition-all duration-300"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-700 font-medium">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      className="mt-2 bg-gray-50 border-gray-200 rounded-2xl focus:border-black focus:bg-white transition-all duration-300 resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-black text-white py-4 rounded-2xl font-bold hover:bg-gray-800 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">{profileData.initials}</span>
              </div>
              <span className="text-lg font-bold text-black">{profileData.name}</span>
            </div>

            <p className="text-gray-600 mb-6">
              Professional Minecraft server moderator and community manager dedicated to creating positive gaming environments.
            </p>

            <div className="flex justify-center mb-8">
              <a href={`mailto:${profileData.email}`} className="text-gray-400 hover:text-black transition-colors duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <div className="border-t border-gray-100 pt-8">
              <p className="text-gray-500 text-sm">
                © 2024 {profileData.name}. All rights reserved. Built with React and Tailwind CSS.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
