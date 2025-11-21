"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import FeatureCardFive from '@/components/sections/feature/FeatureCardFive';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Zap, Sparkles, Wand2, Coins, Rocket, TrendingUp, Image, Smartphone, CreditCard, Users, Star, Trophy } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
      contentWidth="large"
      sizing="medium"
      background="animatedGrid"
      cardStyle="gradient-bordered"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="outline"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="ARBUZ.ai"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763731776474-phb13f4r.jpg"
          navItems={[
            { name: "Features", id: "features" },
            { name: "Pricing", id: "pricing" },
            { name: "Referral", id: "referral" }
          ]}
          button={{
            text: "Try Now",
            href: "https://app.arbuz.ai"
          }}
          buttonClassName="bg-primary-cta hover:bg-accent text-white"
          buttonTextClassName="font-semibold"
        />
      </div>

      <div id="hero" data-section="hero" className="bg-gradient-to-b from-background via-background to-card overflow-hidden">
        <div className="relative z-10">
          <HeroBillboardGallery
            title="AI Platform for Performance Creatives & PWAs"
            description="Generate Banners and PWAs for your offer in 3-5 minutes. Start testing today"
            tag="AI-Powered"
            tagIcon={Zap}
            buttons={[
              {
                text: "Try Now",
                href: "https://app.arbuz.ai",
                props: {
                  className: "bg-primary-cta hover:bg-accent"
                }
              },
              {
                text: "View Demo",
                href: "#features",
                props: {
                  className: "border-2 border-primary-cta text-primary-cta"
                }
              }
            ]}
            mediaItems={[
              {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763731777166-xsj8sck5.jpg",
                imageAlt: "Casino Night PWA Example"
              },
              {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763731777975-0uw16itc.jpg",
                imageAlt: "Gaming Mobile App Interface"
              },
              {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763731779989-4qienovj.jpg",
                imageAlt: "Casino Banner Advertisement"
              },
              {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763731778637-q30ivb9a.jpg",
                imageAlt: "Progressive Web App Demo"
              },
              {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763731779276-th9rzinz.jpg",
                imageAlt: "Poker Tournament Mobile App"
              }
            ]}
            className="min-h-screen"
            titleClassName="text-5xl md:text-7xl font-bold text-white"
            descriptionClassName="text-lg md:text-xl text-gray-300"
          />
        </div>
      </div>

      <div id="features" data-section="features" className="bg-background py-20">
        <div className="max-w-7xl mx-auto">
          <FeatureCardFive
            title="Why Choose Arbuz"
            description="Create professional banners and PWAs instantly with AI intelligence"
            tag="Key Features"
            tagIcon={Sparkles}
            features={[
              {
                title: "3-5 Minutes",
                icon: Zap
              },
              {
                title: "No Designer Needed",
                icon: Wand2
              },
              {
                title: "Credit-Based Pricing",
                icon: Coins
              },
              {
                title: "Instant Generation",
                icon: Rocket
              }
            ]}
            gridVariant="four-items-2x2-equal-grid"
            textboxLayout="default"
            animationType="slide-up"
            showIconBoxBackground={true}
            cardClassName="bg-card border border-accent rounded-lg p-6"
            cardTitleClassName="text-xl font-semibold text-white"
            iconClassName="w-12 h-12 text-primary-cta"
          />
        </div>
      </div>

      <div id="metrics" data-section="metrics" className="bg-card py-20 border-y border-accent">
        <div className="max-w-7xl mx-auto">
          <MetricCardOne
            title="Live Impact"
            description="Real-time statistics from Arbuz community"
            tag="Today's Numbers"
            tagIcon={TrendingUp}
            metrics={[
              {
                id: "1",
                value: "2,847",
                title: "Banners Generated",
                description: "Created and tested today",
                icon: Image
              },
              {
                id: "2",
                value: "1,563",
                title: "PWAs Deployed",
                description: "Live in production",
                icon: Smartphone
              },
              {
                id: "3",
                value: "$847K",
                title: "Revenue Generated",
                description: "By our users this month",
                icon: TrendingUp
              }
            ]}
            gridVariant="three-columns-all-equal-width"
            textboxLayout="default"
            animationType="scale-rotate"
            valueClassName="text-6xl font-bold text-primary-cta"
            titleClassName="text-2xl font-semibold text-white"
            descriptionClassName="text-gray-400"
          />
        </div>
      </div>

      <div id="pricing" data-section="pricing" className="bg-background py-20">
        <div className="max-w-7xl mx-auto">
          <PricingCardThree
            title="Flexible Credit Plans"
            description="Pay only for what you generate. Scale as you grow."
            tag="Transparent Pricing"
            tagIcon={CreditCard}
            plans={[
              {
                id: "starter",
                price: "$29",
                name: "Starter Pack",
                buttons: [
                  {
                    text: "Get Started",
                    href: "https://app.arbuz.ai",
                    props: {
                      className: "w-full"
                    }
                  },
                  {
                    text: "Learn More",
                    href: "#",
                    props: {
                      className: "w-full"
                    }
                  }
                ],
                features: [
                  "50 Banner Credits",
                  "10 PWA Credits",
                  "Basic Templates",
                  "Email Support"
                ]
              },
              {
                id: "pro",
                badge: "Most Popular",
                badgeIcon: Sparkles,
                price: "$99",
                name: "Professional",
                buttons: [
                  {
                    text: "Start Free Trial",
                    href: "https://app.arbuz.ai",
                    props: {
                      className: "w-full"
                    }
                  },
                  {
                    text: "Chat to Sales",
                    href: "#contact",
                    props: {
                      className: "w-full"
                    }
                  }
                ],
                features: [
                  "250 Banner Credits",
                  "50 PWA Credits",
                  "Premium Templates",
                  "Priority Support",
                  "Analytics Dashboard"
                ]
              },
              {
                id: "enterprise",
                price: "Custom",
                name: "Enterprise",
                buttons: [
                  {
                    text: "Contact Sales",
                    href: "#contact",
                    props: {
                      className: "w-full"
                    }
                  },
                  {
                    text: "Schedule Demo",
                    href: "#",
                    props: {
                      className: "w-full"
                    }
                  }
                ],
                features: [
                  "Unlimited Credits",
                  "Custom Templates",
                  "API Access",
                  "24/7 Support",
                  "Dedicated Account Manager"
                ]
              }
            ]}
            textboxLayout="default"
            animationType="slide-up"
            badgeClassName="text-primary-cta font-semibold"
            priceClassName="text-4xl font-bold text-primary-cta"
            nameClassName="text-xl font-semibold text-white"
          />
        </div>
      </div>

      <div id="referral" data-section="referral" className="bg-card py-20">
        <div className="max-w-7xl mx-auto">
          <SocialProofOne
            title="Trusted by Industry Leaders"
            description="Join thousands of affiliates earning 30% lifetime commission through our referral program"
            tag="Partner Network"
            tagIcon={Users}
            logos={[
              "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763731784368-z390lkd9.jpg",
              "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763731784979-7kalyqs7.jpg",
              "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763731785488-or87x6yy.jpg",
              "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763731786210-wanr2nd7.jpg",
              "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763731784368-z390lkd9.jpg",
              "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763731784979-7kalyqs7.jpg"
            ]
            textboxLayout="default"
            speed={40}
            showCard={true}
            buttons={[
              {
                text: "Join Referral Program",
                href: "https://app.arbuz.ai/referral",
                props: {
                  className: "bg-primary-cta hover:bg-accent text-white"
                }
              },
              {
                text: "Learn More",
                href: "#",
                props: {
                  className: "border-2 border-primary-cta text-primary-cta hover:bg-primary-cta hover:text-white"
                }
              }
            ]}
          />
        </div>
      </div>

      <div id="footer" data-section="footer" className="bg-card border-t border-accent">
        <div className="max-w-7xl mx-auto">
          <FooterBase
            logoText="ARBUZ.ai"
            logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763731776474-phb13f4r.jpg"
            copyrightText="© 2025 | ARBUZ.ai - All rights reserved"
            columns={[
              {
                title: "Product",
                items: [
                  { label: "Features", href: "features" },
                  { label: "Pricing", href: "pricing" },
                  { label: "API Docs", href: "#" },
                  { label: "Templates", href: "#" }
                ]
              },
              {
                title: "Company",
                items: [
                  { label: "About Us", href: "#" },
                  { label: "Blog", href: "#" },
                  { label: "Careers", href: "#" },
                  { label: "Press Kit", href: "#" }
                ]
              },
              {
                title: "Support",
                items: [
                  { label: "Help Center", href: "#" },
                  { label: "Contact", href: "#" },
                  { label: "Privacy Policy", href: "#" },
                  { label: "Terms of Service", href: "#" }
                ]
              }
            ]}
            onPrivacyClick={() => console.log('Privacy policy clicked')}
            containerClassName="bg-card border-t border-accent"
            columnClassName="space-y-3"
            columnItemClassName="text-gray-300 hover:text-primary-cta transition-colors"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}