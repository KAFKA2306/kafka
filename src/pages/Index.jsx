import React from 'react'
import { Github, Twitter, Gamepad2, MessageCircle, FileText, ShoppingBag } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import AboutMe from '../components/AboutMe'
import SkillsSection from '../components/SkillsSection'
import ProjectsSection from '../components/ProjectsSection'
import ArticlesSection from '../components/ArticlesSection'
import WishlistSection from '../components/WishlistSection'

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-12">
          <h1 className="text-6xl font-bold mb-4">KAFKA</h1>
          <p className="text-2xl">VRChat Enthusiast | Developer | Data Analyst</p>
          <div className="mt-6 flex flex-wrap justify-center gap-6">
            <SocialLink href="https://github.com/KAFKA2306" icon={<Github size={32} />} text="GitHub Projects" description="Check out my latest code" />
            <SocialLink href="https://x.com/kafka_vr" icon={<Twitter size={32} />} text="Twitter Updates" description="Follow for VRChat events" />
            <SocialLink href="https://vrchat.com/home/user/usr_3e36606d-21c3-4be5-b4b5-4bb5f26eefb0" icon={<Gamepad2 size={32} />} text="VRChat Profile" description="Join me in virtual worlds" />
            <SocialLink href="https://discordapp.com/users/kafka.kf" icon={<MessageCircle size={32} />} text="Discord Chat" description="Let's connect and chat" />
            <SocialLink href="https://note.com/kafkavr/" icon={<FileText size={32} />} text="Blog Articles" description="Read my latest thoughts" />
            <SocialLink href="https://www.ginjake.net/home?id=1150362422437302272" icon={<ShoppingBag size={32} />} text="Wishlist" description="See what I'm eyeing" />
          </div>
        </header>

        <AboutMe />
        <SkillsSection />
        <ProjectsSection />
        <ArticlesSection />
        <WishlistSection />

        <footer className="mt-16 text-center">
          <p className="text-lg">&copy; 2024 KAFKA. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

const SocialLink = ({ href, icon, text, description }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:text-gray-300 transition-colors duration-300">
    {icon}
    <span className="mt-2 text-sm font-bold">{text}</span>
    <span className="mt-1 text-xs">{description}</span>
  </a>
)

export default Index