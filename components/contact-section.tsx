"use client"

import React from "react"

import { useState } from "react"
import { Send, Mail, MapPin, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useLanguage } from "@/lib/language-context"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const { t } = useLanguage()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px w-12 bg-primary" />
          <h2 className="text-sm font-mono text-primary uppercase tracking-wider">
            {t("contact.label")}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              {t("contact.title")}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {t("contact.subtitle")}
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="p-2.5 rounded-md bg-primary/10 text-primary">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{t("contact.info.email")}</p>
                  <a
                    href="mailto:contact@example.com"
                    className="text-sm text-foreground hover:text-primary transition-colors"
                  >
                    contact@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-2.5 rounded-md bg-primary/10 text-primary">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{t("contact.info.location")}</p>
                  <p className="text-sm text-foreground">Peru</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-2.5 rounded-md bg-primary/10 text-primary">
                  <Briefcase className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{t("contact.info.availability")}</p>
                  <p className="text-sm text-foreground">{t("contact.info.availabilityValue")}</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="h-full flex items-center justify-center p-8 rounded-xl bg-card border border-border">
                <div className="text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Send className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Message Sent!</h4>
                  <p className="text-sm text-muted-foreground">
                    Thanks for reaching out. I&apos;ll get back to you soon.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm">{t("contact.form.name")}</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    className="bg-card"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm">{t("contact.form.email")}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="bg-card"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm">{t("contact.form.message")}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={4}
                    required
                    className="bg-card resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full gap-2" disabled={isSubmitting}>
                  {isSubmitting ? (
                    t("contact.form.sending")
                  ) : (
                    <>
                      {t("contact.form.send")} <Send className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
