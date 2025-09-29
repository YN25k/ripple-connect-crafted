import { Search, Filter, Plus, Mail, Phone, Briefcase, GraduationCap, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Contacts = () => {
  const contacts = [
    { name: "Sarah Chen", role: "Product Manager", company: "TechCorp", category: "Professional", interactions: 15, lastContact: "2 days ago" },
    { name: "Michael Rodriguez", role: "Software Engineer", company: "StartupXYZ", category: "Professional", interactions: 8, lastContact: "1 week ago" },
    { name: "Emma Thompson", role: "UX Designer", company: "DesignHub", category: "Professional", interactions: 12, lastContact: "3 days ago" },
    { name: "James Wilson", role: "Data Scientist", company: "AI Labs", category: "Professional", interactions: 6, lastContact: "5 days ago" },
    { name: "Lisa Park", role: "Marketing Director", company: "BrandCo", category: "Professional", interactions: 10, lastContact: "4 days ago" },
    { name: "David Kim", role: "PhD Candidate", company: "MIT", category: "Academic", interactions: 20, lastContact: "1 day ago" },
    { name: "Alex Johnson", role: "Entrepreneur", company: "Self-employed", category: "Personal", interactions: 25, lastContact: "Today" },
    { name: "Rachel Green", role: "Professor", company: "Emory University", category: "Academic", interactions: 18, lastContact: "3 days ago" },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Professional": return <Briefcase className="h-4 w-4" />;
      case "Academic": return <GraduationCap className="h-4 w-4" />;
      case "Personal": return <Heart className="h-4 w-4" />;
      default: return null;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Professional": return "bg-primary/20 text-primary border-primary/30";
      case "Academic": return "bg-accent/20 text-accent border-accent/30";
      case "Personal": return "bg-destructive/20 text-destructive border-destructive/30";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="p-8 space-y-8 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold mb-2">Contacts</h1>
          <p className="text-muted-foreground">Manage your professional network</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30">
          <Plus className="h-4 w-4 mr-2" />
          Add Contact
        </Button>
      </div>

      {/* Search and Filter */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search contacts..." 
            className="pl-10 bg-card/50 border-border/50"
          />
        </div>
        <Button variant="outline" className="border-border/50 bg-card/50">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>

      {/* Category Filter Badges */}
      <div className="flex gap-2">
        <Badge variant="outline" className="border-primary/30 bg-primary/10 text-primary cursor-pointer hover:bg-primary/20">
          All Contacts (42)
        </Badge>
        <Badge variant="outline" className="border-border/50 cursor-pointer hover:bg-muted/50">
          Professional (28)
        </Badge>
        <Badge variant="outline" className="border-border/50 cursor-pointer hover:bg-muted/50">
          Academic (10)
        </Badge>
        <Badge variant="outline" className="border-border/50 cursor-pointer hover:bg-muted/50">
          Personal (4)
        </Badge>
      </div>

      {/* Contacts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {contacts.map((contact, index) => (
          <Card key={index} className="glass-card border-border/50 hover:border-primary/50 transition-all cursor-pointer group">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-lg font-bold">
                  {contact.name.split(' ').map(n => n[0]).join('')}
                </div>
                <Badge variant="outline" className={`${getCategoryColor(contact.category)} text-xs flex items-center gap-1`}>
                  {getCategoryIcon(contact.category)}
                  {contact.category}
                </Badge>
              </div>
              
              <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                {contact.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-1">{contact.role}</p>
              <p className="text-xs text-muted-foreground/70 mb-4">{contact.company}</p>

              <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border/50 pt-4">
                <div className="flex items-center gap-1">
                  <Mail className="h-3 w-3" />
                  {contact.interactions} interactions
                </div>
                <div className="text-accent">{contact.lastContact}</div>
              </div>

              <div className="flex gap-2 mt-4">
                <Button size="sm" variant="outline" className="flex-1 border-border/50 hover:bg-primary/10 hover:text-primary">
                  <Mail className="h-3 w-3 mr-1" />
                  Message
                </Button>
                <Button size="sm" variant="outline" className="border-border/50 hover:bg-accent/10 hover:text-accent">
                  <Phone className="h-3 w-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
