// ================================================================
// LeadPulseAI - Mock Data & State Management
// Version: 1.0
// ================================================================

// ============= Sarah Chen - Complete Lead Profile =============
const sarahChen = {
    id: "LC-2025-8472",
    firstName: "Sarah",
    lastName: "Chen",
    fullName: "Sarah Chen",
    email: "sarah.chen@email.com",
    phone: "+65 9123 4567",
    age: 32,
    maritalStatus: "Married",
    location: "Singapore, District 10",
    avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%239333EA' width='100' height='100'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='40' fill='white'%3ESC%3C/text%3E%3C/svg%3E",

    // Lead Intelligence
    leadScore: 95,
    conversionProbability: 100, // Converted customer
    estimatedLTV: 95000, // Updated after upsell
    stage: "Loyal Customer", // New → Contacted → Qualified → Customer → Loyal Customer
    lifecycleStage: "Loyal Customer",
    previousStages: ["New", "Contacted", "Qualified", "Active Customer"],
    temperature: "hot", // hot, warm, cold
    daysInPipeline: 22, // Days until purchase
    daysAsCustomer: 143, // Oct 23, 2025 → March 15, 2026
    engagementRate: 96,
    customerStatus: "Active",
    activePolicies: 2,
    totalMonthlyPremium: 590,
    npsScore: 9, // Promoter
    referralsMade: 1,
    upsellSuccess: 1,

    // Trigger Events
    triggerEvents: [
        {
            type: "pregnancy",
            title: "First Child Expected",
            detected: "2025-10-01T08:15:00+08:00",
            source: "Hospital Partnership Program - Thomson Medical inquiry form",
            details: "Sarah filled inquiry form for First-Time Parents Package with consent checkbox",
            intentWindow: "active",
            totalDays: 72,
            daysElapsed: 14,
            daysRemaining: 58,
            priority: "critical"
        },
        {
            type: "birthday",
            title: "Birthday Approaching",
            date: "2025-11-08",
            daysUntil: 24,
            priority: "moderate"
        },
        {
            type: "policy_anniversary",
            title: "Policy Anniversary",
            date: "2026-06-15",
            daysUntil: 243,
            priority: "low"
        }
    ],

    // Current Coverage
    currentCoverage: [
        {
            type: "Hospitalization Shield",
            premium: 85,
            coverage: 50000,
            policyNumber: "AIA-2023-847362",
            status: "active",
            startDate: "2023-06-15",
            renewalDate: "2026-06-15"
        }
    ],

    // Coverage Gaps
    coverageGaps: [
        {
            type: "maternity",
            title: "No Maternity Coverage",
            severity: "critical",
            estimatedRisk: 20000,
            description: "$15-25K out-of-pocket delivery costs"
        },
        {
            type: "life_insurance",
            title: "No Life Insurance",
            severity: "critical",
            estimatedRisk: 500000,
            description: "Family unprotected if breadwinner loss"
        },
        {
            type: "critical_illness",
            title: "No Critical Illness Coverage",
            severity: "moderate",
            estimatedRisk: 100000,
            description: "Cancer/serious illness expenses uncovered"
        },
        {
            type: "newborn",
            title: "No Newborn Coverage",
            severity: "moderate",
            estimatedRisk: 50000,
            description: "Baby health issues from day 1 not covered"
        }
    ],

    // Recommended Products
    recommendedProducts: [
        {
            id: "PROD-001",
            name: "Maternity Protection Plan",
            premium: 180,
            closeProbability: 0.85,
            benefits: [
                "Full delivery coverage up to $25K",
                "Prenatal care included",
                "Complications coverage",
                "Private hospital access"
            ]
        },
        {
            id: "PROD-002",
            name: "Life Insurance ($500K)",
            premium: 120,
            closeProbability: 0.72,
            benefits: [
                "$500K death benefit",
                "Terminal illness rider",
                "Accidental death double payout",
                "Premium waiver for disability"
            ]
        },
        {
            id: "PROD-003",
            name: "Critical Illness Rider",
            premium: 95,
            closeProbability: 0.68,
            benefits: [
                "37 critical illnesses covered",
                "Lump sum payout on diagnosis",
                "Early stage cancer coverage",
                "Multiple claim benefit"
            ]
        },
        {
            id: "PROD-004",
            name: "Newborn Coverage Package",
            premium: 45,
            closeProbability: 0.78,
            benefits: [
                "Coverage from day 1",
                "Congenital conditions included",
                "NICU expenses covered",
                "Vaccination coverage"
            ]
        }
    ],

    // Behavioral Insights
    behavioralInsights: {
        communicationStyle: "Responsive, appreciates education",
        decisionMaking: "Joint with husband (mentioned 3x)",
        objections: ["Feeling overwhelmed", "Need time to think", "Comparing competitors"],
        painPoints: ["Unclear where to start", "Affordability concern", "Too much information"],
        positiveSignals: ["That would be helpful", "asks questions", "responds quickly"],
        engagementPattern: "Evenings 7-9PM (high response rate)",
        preferredChannel: "Voice calls > SMS > Email",
        competitorsMentioned: ["Prudential ($320/month quote)", "Manulife (researching)"],
        emotionalState: "Anxious about being prepared for baby",
        trustLevel: "high"
    },

    // AI Recommended Approach
    aiStrategy: {
        tone: "Gentle, educational, non-pushy",
        focus: "Peace of mind for baby's arrival",
        positioning: "Protection partner, not just insurer",
        urgency: "Limited-time new parent offer",
        nextBestActions: [
            "Book specialist consultation within 48 hours",
            "Send competitor comparison analysis tonight",
            "Activate new parent bundle discount",
            "Prepare agent Rachel Tan for handoff"
        ]
    },

    // Comprehensive Timeline Events (All events in chronological order)
    timelineEvents: [
        // DAY 1 - OCT 1, 2025
        {
            id: "TL-001",
            timestamp: "2025-10-01T08:15:00+08:00",
            type: "lead_created",
            category: "milestone",
            icon: "🆕",
            title: "Lead Created",
            description: "New lead added to system from hospital partnership referral",
            details: {
                source: "Thomson Medical - First-Time Parents Package inquiry",
                initialScore: 32,
                stage: "New",
                assignedTo: "AI Agent Emma"
            },
            color: "#4facfe"
        },
        {
            id: "TL-002",
            timestamp: "2025-10-01T08:16:00+08:00",
            type: "trigger_detected",
            category: "trigger",
            icon: "🎯",
            title: "Pregnancy Trigger Detected",
            description: "Critical life event trigger activated - First child expected",
            details: {
                triggerType: "Pregnancy",
                source: "Hospital Partnership Program - Thomson Medical inquiry form",
                intentWindow: "72 days (Active)",
                priority: "CRITICAL",
                consent: "✅ Explicit consent via inquiry form checkbox"
            },
            color: "#FF6B6B",
            impact: "Lead Score: 32% → 45% (+13%)"
        },
        {
            id: "TL-003",
            timestamp: "2025-10-01T08:20:00+08:00",
            type: "coverage_analysis",
            category: "system_action",
            icon: "🔍",
            title: "Coverage Gap Analysis Completed",
            description: "AI analyzed current coverage and identified critical gaps",
            details: {
                currentPolicies: 1,
                gapsFound: 4,
                criticalGaps: 2,
                recommendations: "4 products matched to life stage"
            },
            color: "#FFA500",
            gaps: [
                "🔴 CRITICAL: No maternity coverage ($15-25K risk)",
                "🔴 CRITICAL: No life insurance (Family unprotected)",
                "🟡 MODERATE: No critical illness coverage",
                "🟡 MODERATE: No newborn coverage"
            ]
        },
        {
            id: "TL-004",
            timestamp: "2025-10-01T08:25:00+08:00",
            type: "campaign_enrollment",
            category: "system_action",
            icon: "🤖",
            title: "Auto-Enrolled in Campaign",
            description: "Lead automatically added to Pregnancy Nurture Campaign",
            details: {
                campaign: "Pregnancy Nurture Campaign",
                duration: "72 days",
                touchpoints: 12,
                expectedConversion: "68%"
            },
            color: "#9333EA"
        },
        {
            id: "TL-005",
            timestamp: "2025-10-01T09:00:00+08:00",
            type: "email_sent",
            category: "communication",
            icon: "📧",
            title: "Welcome Email Sent",
            description: "Day 1 Campaign Email: Coverage Analysis Report",
            details: {
                subject: "Welcome to AIA - Your Coverage Analysis",
                template: "Pregnancy_Welcome_v3",
                status: "Sent",
                deliveryTime: "2 seconds"
            },
            color: "#4facfe"
        },
        {
            id: "TL-006",
            timestamp: "2025-10-01T09:00:02+08:00",
            type: "email_delivered",
            category: "system_action",
            icon: "✅",
            title: "Email Delivered",
            description: "Welcome email successfully delivered to inbox",
            details: {
                status: "Delivered",
                bounced: false,
                spamScore: "0.2 (Clean)"
            },
            color: "#00C853"
        },

        // DAY 2 - OCT 2, 2025
        {
            id: "TL-007",
            timestamp: "2025-10-02T10:32:00+08:00",
            type: "email_opened",
            category: "engagement",
            icon: "📧",
            title: "Email Opened",
            description: "Sarah opened Welcome Email - Coverage Analysis Report",
            details: {
                timeSpent: "2 minutes 15 seconds",
                device: "iPhone 14",
                location: "Singapore",
                readComplete: "Yes (scrolled to bottom)"
            },
            color: "#4facfe",
            impact: "Engagement Score +8%"
        },
        {
            id: "TL-008",
            timestamp: "2025-10-02T10:35:00+08:00",
            type: "link_clicked",
            category: "engagement",
            icon: "🖱️",
            title: "Link Clicked",
            description: "Clicked 'Learn More About Maternity Coverage' button",
            details: {
                link: "Maternity Protection Plan details",
                destination: "Product page",
                timeOnPage: "45 seconds"
            },
            color: "#4facfe",
            impact: "Intent Signal: High"
        },
        {
            id: "TL-009",
            timestamp: "2025-10-02T15:00:00+08:00",
            type: "call_scheduled",
            category: "system_action",
            icon: "📞",
            title: "AI Call #1 Scheduled",
            description: "AI scheduled first outbound call for 7:15 PM (optimal engagement time)",
            details: {
                scheduledFor: "Oct 2, 2025 7:15 PM",
                agent: "Emma (AI)",
                reason: "Email engagement detected - follow up within 12 hours",
                expectedDuration: "8-10 minutes"
            },
            color: "#9333EA"
        },
        {
            id: "TL-010",
            timestamp: "2025-10-02T19:15:00+08:00",
            type: "voice_call",
            category: "communication",
            icon: "📞",
            title: "AI Call #1 Completed",
            description: "First AI outbound call - Introduction and needs assessment",
            details: {
                duration: "8 minutes 42 seconds",
                sentiment: "7.5/10 (Positive)",
                outcome: "Successful introduction",
                nextAction: "Send educational content"
            },
            color: "#9333EA",
            impact: "Conversion Probability: 45% → 52% (+7%)",
            transcript: "13 exchanges"
        },

        // DAY 3 - OCT 3, 2025
        {
            id: "TL-011",
            timestamp: "2025-10-03T22:42:00+08:00",
            type: "email_opened",
            category: "engagement",
            icon: "📧",
            title: "Email Engagement - Late Night",
            description: "Opened 'Pregnancy Insurance Checklist' email at 10:42 PM",
            details: {
                timeSpent: "4 minutes 32 seconds",
                linksClicked: 2,
                links: ["Pricing calculator", "Coverage comparison table"],
                device: "iPad"
            },
            color: "#4facfe",
            impact: "High engagement - researching actively"
        },
        {
            id: "TL-012",
            timestamp: "2025-10-03T23:00:00+08:00",
            type: "score_change",
            category: "intelligence",
            icon: "📈",
            title: "Lead Score Increased",
            description: "Conversion probability increased based on engagement pattern",
            details: {
                previousScore: "52%",
                newScore: "55%",
                change: "+3%",
                reason: "Active email engagement + link clicks",
                confidence: "High"
            },
            color: "#00C853"
        },

        // DAY 5 - OCT 5, 2025
        {
            id: "TL-013",
            timestamp: "2025-10-05T20:15:00+08:00",
            type: "sms_sent",
            category: "communication",
            icon: "💬",
            title: "SMS Campaign Sent",
            description: "Day 5 touchpoint - Quick check-in message",
            details: {
                message: "Hi Sarah! Just checking if you had any questions...",
                length: "156 characters",
                deliveryStatus: "Delivered"
            },
            color: "#FFB347"
        },
        {
            id: "TL-014",
            timestamp: "2025-10-05T20:42:00+08:00",
            type: "sms_reply",
            category: "engagement",
            icon: "💬",
            title: "SMS Reply Received",
            description: "Sarah replied to SMS - Voluntary engagement signal",
            details: {
                message: "Yes, I'd like to know more about the life insurance option",
                responseTime: "27 minutes",
                sentiment: "Positive",
                voluntaryEngagement: true
            },
            color: "#FFB347",
            impact: "Conversion Probability: 55% → 62% (+7%)"
        },

        // DAY 7 - OCT 7, 2025
        {
            id: "TL-015",
            timestamp: "2025-10-07T09:00:00+08:00",
            type: "email_sent",
            category: "communication",
            icon: "📧",
            title: "Educational Email Sent",
            description: "Day 7 touchpoint - Maternity Coverage Benefits Guide",
            details: {
                subject: "Everything You Need to Know About Maternity Insurance",
                template: "Education_Maternity_v2",
                attachments: ["Benefit comparison chart", "FAQ document"]
            },
            color: "#4facfe"
        },
        {
            id: "TL-016",
            timestamp: "2025-10-07T11:23:00+08:00",
            type: "email_opened",
            category: "engagement",
            icon: "📧",
            title: "Email Opened - Multiple Times",
            description: "Opened educational email 3 times over 2 hours",
            details: {
                opens: 3,
                totalTimeSpent: "8 minutes 15 seconds",
                linksClicked: 4,
                downloadedPDF: "Yes (Benefit comparison chart)"
            },
            color: "#4facfe",
            impact: "Researching actively - Intent Score: High"
        },

        // DAY 9 - OCT 9, 2025
        {
            id: "TL-017",
            timestamp: "2025-10-09T19:30:00+08:00",
            type: "voice_call",
            category: "communication",
            icon: "📞",
            title: "AI Call #2 Completed",
            description: "Second AI call - Addressing questions and objections",
            details: {
                duration: "11 minutes 18 seconds",
                sentiment: "7.8/10 (Very Positive)",
                outcome: "Addressed affordability concerns",
                objections: ["Too expensive", "Need husband's input"]
            },
            color: "#9333EA",
            impact: "Conversion Probability: 62% → 68% (+6%)",
            transcript: "17 exchanges"
        },

        // DAY 12 - OCT 12, 2025
        {
            id: "TL-018",
            timestamp: "2025-10-12T16:45:00+08:00",
            type: "score_change",
            category: "intelligence",
            icon: "📈",
            title: "Stage Changed: Qualified",
            description: "Lead progressed from Contacted → Qualified",
            details: {
                previousStage: "Contacted",
                newStage: "Qualified",
                trigger: "Multiple positive touchpoints + high engagement",
                qualificationCriteria: "Score >85, Engagement >90%, Intent: High"
            },
            color: "#00C853",
            impact: "Lead Score: 85/100"
        },

        // DAY 14 - OCT 14, 2025
        {
            id: "TL-019",
            timestamp: "2025-10-14T14:30:00+08:00",
            type: "competitor_activity",
            category: "risk",
            icon: "⚠️",
            title: "Competitive Intelligence Alert",
            description: "Sarah uploaded Prudential quote document",
            details: {
                competitor: "Prudential",
                quoteAmount: "$320/month",
                ourQuote: "$440/month",
                priceDifference: "+$120/month",
                status: "AT RISK - Comparing competitors"
            },
            color: "#FF6B6B",
            impact: "Risk Level: Medium",
            aiAction: "Auto-triggered competitor comparison email"
        },
        {
            id: "TL-020",
            timestamp: "2025-10-14T14:45:00+08:00",
            type: "email_sent",
            category: "system_action",
            icon: "📧",
            title: "Competitor Comparison Email Sent",
            description: "AI auto-sent side-by-side comparison with Prudential",
            details: {
                subject: "AIA vs Prudential - Coverage Comparison",
                trigger: "Competitive activity detected",
                responseTime: "15 minutes (automated)",
                template: "Competitor_Comparison_Prudential"
            },
            color: "#9333EA"
        },

        // DAY 15 - OCT 15, 2025
        {
            id: "TL-021",
            timestamp: "2025-10-15T10:15:00+08:00",
            type: "email_opened",
            category: "engagement",
            icon: "📧",
            title: "Competitor Email Opened",
            description: "Opened comparison email - spent 6 minutes reviewing",
            details: {
                timeSpent: "6 minutes 42 seconds",
                linksClicked: 5,
                sections: ["Pricing breakdown", "Coverage gaps", "Customer reviews"],
                downloadedPDF: "Yes (Full comparison chart)"
            },
            color: "#4facfe",
            impact: "Re-engaged after competitive threat"
        },
        {
            id: "TL-022",
            timestamp: "2025-10-15T19:32:00+08:00",
            type: "voice_call",
            category: "communication",
            icon: "📞",
            title: "AI Call #3 (ONGOING)",
            description: "Currently discussing maternity coverage and competitor comparison",
            details: {
                duration: "In progress",
                sentiment: "8.2/10 (Very Positive)",
                currentTopic: "Addressing Prudential comparison",
                stage: "Building value case"
            },
            color: "#9333EA",
            impact: "Conversion Probability: 68% → 75% (+7%)",
            status: "LIVE"
        },
        {
            id: "TL-023",
            timestamp: "2025-10-15T19:45:00+08:00",
            type: "handoff_prepared",
            category: "milestone",
            icon: "👤",
            title: "Specialist Handoff Prepared",
            description: "AI prepared handoff to human specialist Rachel Tan",
            details: {
                specialist: "Rachel Tan (Senior Maternity Specialist)",
                reason: "High-value lead ready for consultation",
                leadScore: "87/100",
                conversionProb: "75%",
                estimatedLTV: "$63,000",
                briefStatus: "Agent notified, awaiting appointment confirmation"
            },
            color: "#00C853"
        },

        // DAY 17 - OCT 17, 2025 - SPECIALIST MEETING
        {
            id: "TL-024",
            timestamp: "2025-10-17T14:00:00+08:00",
            type: "appointment_confirmed",
            category: "milestone",
            icon: "✅",
            title: "Appointment Confirmed",
            description: "Sarah confirmed specialist meeting with Rachel Tan",
            details: {
                scheduledDate: "Oct 17, 2025 2:00 PM",
                specialist: "Rachel Tan",
                meetingType: "In-person consultation",
                location: "AIA Tower, Office 12-03",
                duration: "60 minutes"
            },
            color: "#00C853"
        },
        {
            id: "TL-025",
            timestamp: "2025-10-17T14:00:00+08:00",
            type: "specialist_meeting",
            category: "communication",
            icon: "👤",
            title: "Specialist Consultation Completed",
            description: "Rachel Tan conducted comprehensive maternity coverage consultation",
            details: {
                duration: "58 minutes",
                specialist: "Rachel Tan",
                productsDiscussed: "Maternity + Life + Critical Illness + Newborn bundle",
                quotePresented: "$440/month",
                sentiment: "9.2/10 (Excellent)",
                outcome: "Quote provided, 5-day decision timeline"
            },
            color: "#9333EA",
            impact: "Conversion Probability: 75% → 82% (+7%)"
        },
        {
            id: "TL-026",
            timestamp: "2025-10-17T15:30:00+08:00",
            type: "email_sent",
            category: "communication",
            icon: "📧",
            title: "Meeting Recap Email Sent",
            description: "Automated post-meeting summary with quote and next steps",
            details: {
                subject: "Great Meeting Today, Sarah! Here's Your Personalized Quote",
                attachments: ["Quote breakdown", "Payment options", "FAQ document"],
                callToAction: "Confirm by Oct 22 for new parent pricing",
                decisionDeadline: "Oct 22, 2025"
            },
            color: "#4facfe"
        },

        // DAY 18 - OCT 18, 2025 - POST-MEETING NURTURE
        {
            id: "TL-027",
            timestamp: "2025-10-18T10:15:00+08:00",
            type: "email_opened",
            category: "engagement",
            icon: "📧",
            title: "Quote Email Opened",
            description: "Sarah opened meeting recap email and reviewed quote",
            details: {
                timeSpent: "5 minutes 42 seconds",
                linksClicked: 3,
                sections: ["Payment calculator", "Coverage details", "FAQ"],
                downloadedPDF: "Yes (Full quote breakdown)"
            },
            color: "#4facfe",
            impact: "High intent - reviewing financial details"
        },
        {
            id: "TL-028",
            timestamp: "2025-10-18T19:30:00+08:00",
            type: "sms_sent",
            category: "communication",
            icon: "💬",
            title: "Post-Meeting Check-in SMS",
            description: "AI sent personalized follow-up message",
            details: {
                message: "Hi Sarah! Hope yesterday's meeting was helpful. Any questions about the maternity coverage package?",
                deliveryStatus: "Delivered"
            },
            color: "#FFB347"
        },

        // DAY 20 - OCT 20, 2025 - OBJECTION HANDLING
        {
            id: "TL-029",
            timestamp: "2025-10-20T20:15:00+08:00",
            type: "voice_call",
            category: "communication",
            icon: "📞",
            title: "AI Follow-up Call - Decision Support",
            description: "Emma called to address questions and support decision-making",
            details: {
                duration: "9 minutes 32 seconds",
                sentiment: "7.8/10 (Positive)",
                outcome: "Sarah mentioned 'Need to discuss with husband tonight'",
                objection: "Joint decision-making",
                nextAction: "Send couple's decision guide"
            },
            color: "#9333EA",
            impact: "Identified decision-making process"
        },
        {
            id: "TL-030",
            timestamp: "2025-10-20T20:30:00+08:00",
            type: "email_sent",
            category: "system_action",
            icon: "📧",
            title: "Couple's Decision Guide Sent",
            description: "AI auto-sent targeted content for joint decision-making",
            details: {
                subject: "Making Insurance Decisions Together",
                template: "Couples_Decision_Guide_v2",
                content: ["Joint decision checklist", "Testimonial from young parents", "FAQ for partners"]
            },
            color: "#9333EA"
        },

        // DAY 21 - OCT 21, 2025
        {
            id: "TL-031",
            timestamp: "2025-10-21T22:45:00+08:00",
            type: "email_opened",
            category: "engagement",
            icon: "📧",
            title: "Late Night Email Engagement",
            description: "Sarah and husband reviewed couple's guide together at 10:45 PM",
            details: {
                timeSpent: "8 minutes 15 seconds",
                device: "iPad",
                linksClicked: 5,
                sections: ["Testimonials", "Payment options", "Coverage comparison"]
            },
            color: "#4facfe",
            impact: "Joint review session - strong buying signal"
        },

        // DAY 22 - OCT 22, 2025 - URGENCY DAY
        {
            id: "TL-032",
            timestamp: "2025-10-22T09:00:00+08:00",
            type: "sms_sent",
            category: "communication",
            icon: "💬",
            title: "Decision Deadline Reminder",
            description: "AI sent gentle urgency reminder about special pricing expiration",
            details: {
                message: "Hi Sarah! Just a reminder - your special new parent pricing expires today. Let us know if you need more time 😊",
                urgencyLevel: "Medium"
            },
            color: "#FFB347"
        },
        {
            id: "TL-033",
            timestamp: "2025-10-22T16:20:00+08:00",
            type: "voice_call",
            category: "communication",
            icon: "📞",
            title: "Decision Day Call - CONVERSION!",
            description: "Sarah called in: 'We've decided to go ahead!'",
            details: {
                duration: "6 minutes 12 seconds",
                sentiment: "9.5/10 (Extremely Positive)",
                outcome: "PURCHASE DECISION MADE",
                nextAction: "Transfer to Rachel for application processing"
            },
            color: "#00C853",
            impact: "🎉 CONVERSION ACHIEVED! 75% → 100%"
        },

        // DAY 23 - OCT 23, 2025 - POLICY PURCHASE
        {
            id: "TL-034",
            timestamp: "2025-10-23T10:30:00+08:00",
            type: "policy_purchased",
            category: "milestone",
            icon: "🎉",
            title: "POLICY PURCHASED - Customer Conversion!",
            description: "Sarah completed application and made first premium payment",
            details: {
                policyNumber: "AIA-2025-MAT-847362",
                bundle: "Maternity + Life + Critical Illness + Newborn",
                monthlyPremium: "$440",
                annualPremium: "$5,280",
                lifetimeValue: "$63,000",
                paymentMethod: "Credit Card Auto-debit",
                specialist: "Rachel Tan"
            },
            color: "#00C853",
            impact: "Lead → Customer Conversion Complete!"
        },
        {
            id: "TL-035",
            timestamp: "2025-10-23T10:35:00+08:00",
            type: "lifecycle_stage_change",
            category: "milestone",
            icon: "📊",
            title: "Lifecycle Stage: Customer",
            description: "Sarah progressed from Qualified Lead → Active Customer",
            details: {
                previousStage: "Qualified Lead",
                newStage: "Active Customer",
                daysInSalesPipeline: 22,
                totalTouchpoints: 11,
                conversionRate: "100%"
            },
            color: "#00C853"
        },

        // POST-PURCHASE NURTURING - ONBOARDING PHASE
        // DAY 24 - OCT 24, 2025
        {
            id: "TL-036",
            timestamp: "2025-10-24T09:00:00+08:00",
            type: "email_sent",
            category: "communication",
            icon: "📧",
            title: "Welcome to AIA - Onboarding Email",
            description: "Customer onboarding sequence initiated",
            details: {
                subject: "Welcome to the AIA Family, Sarah! 🎉",
                attachments: ["Policy documents", "Quick start guide", "Mobile app link"],
                content: ["How to file claims", "24/7 support hotline", "Account activation"]
            },
            color: "#4facfe"
        },
        {
            id: "TL-037",
            timestamp: "2025-10-24T14:30:00+08:00",
            type: "email_opened",
            category: "engagement",
            icon: "📧",
            title: "Welcome Email Opened",
            description: "Sarah reviewed welcome package and downloaded mobile app",
            details: {
                timeSpent: "6 minutes 30 seconds",
                appDownloaded: "Yes (iOS)",
                accountActivated: "Yes",
                documentsViewed: "All policy documents"
            },
            color: "#4facfe"
        },

        // DAY 25 - OCT 25, 2025
        {
            id: "TL-038",
            timestamp: "2025-10-25T10:00:00+08:00",
            type: "sms_sent",
            category: "communication",
            icon: "💬",
            title: "Onboarding SMS - Mobile App",
            description: "SMS reminder to activate mobile app features",
            details: {
                message: "Welcome to AIA, Sarah! 🎉 Your policy is active. Download our app to access your coverage anytime: [link]"
            },
            color: "#FFB347"
        },

        // DAY 27 - OCT 27, 2025
        {
            id: "TL-039",
            timestamp: "2025-10-27T19:00:00+08:00",
            type: "voice_call",
            category: "communication",
            icon: "📞",
            title: "AI Onboarding Call - Coverage Education",
            description: "Emma conducted onboarding walkthrough of maternity benefits",
            details: {
                duration: "12 minutes 20 seconds",
                sentiment: "8.8/10 (Very Positive)",
                topicsCovered: ["How to use maternity benefits", "Waiting periods", "Hospital selection", "Claim filing process"],
                outcome: "Customer fully educated on coverage"
            },
            color: "#9333EA"
        },

        // NOVEMBER 2025 - RETENTION PHASE
        // NOV 1, 2025
        {
            id: "TL-040",
            timestamp: "2025-11-01T09:00:00+08:00",
            type: "email_sent",
            category: "communication",
            icon: "📧",
            title: "Educational Email Series #1",
            description: "Customer education campaign - Prenatal care checklist",
            details: {
                subject: "Your Prenatal Care Checklist",
                series: "Maternity Journey Education (1 of 6)",
                content: ["Coverage at each trimester", "Recommended screenings", "Maximizing benefits"]
            },
            color: "#4facfe"
        },

        // NOV 8, 2025 - BIRTHDAY
        {
            id: "TL-041",
            timestamp: "2025-11-08T08:00:00+08:00",
            type: "birthday_trigger",
            category: "trigger",
            icon: "🎂",
            title: "Birthday Trigger - Personalized Greeting",
            description: "Sarah's birthday detected - sent personalized greeting with gift",
            details: {
                age: 33,
                gift: "$50 premium credit",
                message: "Happy Birthday Sarah! 🎂 As a gift, here's a $50 credit for your next premium. Enjoy your day!"
            },
            color: "#FF6B6B"
        },
        {
            id: "TL-042",
            timestamp: "2025-11-08T10:30:00+08:00",
            type: "sms_reply",
            category: "engagement",
            icon: "💬",
            title: "Birthday Thank You Message",
            description: "Sarah replied to birthday greeting",
            details: {
                message: "Thank you so much! This is so thoughtful 😊",
                sentiment: "9.8/10 (Delighted)",
                customerSatisfaction: "Extremely High"
            },
            color: "#FFB347",
            impact: "NPS increased to 9/10 (Promoter)"
        },

        // NOV 15, 2025
        {
            id: "TL-043",
            timestamp: "2025-11-15T09:00:00+08:00",
            type: "email_sent",
            category: "communication",
            icon: "📧",
            title: "Educational Email Series #2",
            description: "Preparing for delivery - Insurance edition",
            details: {
                subject: "Preparing for Delivery: Insurance Edition",
                series: "Maternity Journey Education (2 of 6)",
                content: ["Hospital admission process", "Required documents", "Emergency contacts"]
            },
            color: "#4facfe"
        },

        // DEC 1, 2025 - 30-DAY REVIEW
        {
            id: "TL-044",
            timestamp: "2025-12-01T15:00:00+08:00",
            type: "voice_call",
            category: "communication",
            icon: "📞",
            title: "AI 30-Day Customer Success Check-in",
            description: "Emma conducted satisfaction survey and coverage review",
            details: {
                duration: "8 minutes 45 seconds",
                sentiment: "9.2/10 (Excellent)",
                npsScore: "9/10 (Promoter)",
                satisfaction: "Very satisfied with coverage and service",
                questionsAnswered: 3,
                outcome: "Happy customer, requested referral info"
            },
            color: "#9333EA",
            impact: "NPS Score: 9/10 (Promoter Status Achieved)"
        },

        // DEC 15, 2025 - REFERRAL
        {
            id: "TL-045",
            timestamp: "2025-12-15T14:20:00+08:00",
            type: "referral_made",
            category: "milestone",
            icon: "🌟",
            title: "Customer Referral - Lisa Wong",
            description: "Sarah referred her friend Lisa Wong (expecting mother)",
            details: {
                referredLead: "Lisa Wong",
                leadId: "LC-2025-9482",
                referralBonus: "$100 premium credit",
                referralStatus: "Lead created and contacted"
            },
            color: "#00C853",
            impact: "Customer Advocacy Achieved - Lifetime Value +$5,000"
        },

        // JANUARY 2026 - QUARTERLY TOUCHPOINT
        {
            id: "TL-046",
            timestamp: "2026-01-02T09:00:00+08:00",
            type: "email_sent",
            category: "communication",
            icon: "📧",
            title: "Quarterly Newsletter - Q1 2026",
            description: "Customer engagement - Industry news and health tips",
            details: {
                subject: "AIA Quarterly Update: New Year, New Benefits",
                content: ["Health tips for expecting mothers", "Customer success stories", "New benefits announced"],
                engagement: "Newsletter campaign"
            },
            color: "#4facfe"
        },

        // FEBRUARY 2026 - BABY BORN!
        {
            id: "TL-047",
            timestamp: "2026-02-14T03:45:00+08:00",
            type: "life_event_trigger",
            category: "trigger",
            icon: "🍼",
            title: "BABY BORN - New Life Event Detected!",
            description: "Sarah filed maternity claim - Baby Chen was born!",
            details: {
                event: "Baby Birth",
                hospital: "Thomson Medical Centre",
                claimAmount: "$18,500",
                claimStatus: "Approved and processed",
                babyName: "Emma Chen",
                trigger: "Education planning opportunity"
            },
            color: "#FF6B6B",
            impact: "New upsell opportunity: Education savings + Child protection"
        },
        {
            id: "TL-048",
            timestamp: "2026-02-14T10:00:00+08:00",
            type: "email_sent",
            category: "communication",
            icon: "📧",
            title: "Congratulations Email - Baby Born!",
            description: "Automated congratulations with newborn coverage activation",
            details: {
                subject: "Welcome to the world, Baby Emma! 🎉",
                content: ["Newborn coverage activated", "How to add baby to policy", "Vaccination schedule coverage"],
                gift: "Baby gift basket (delivered)"
            },
            color: "#4facfe"
        },

        // FEB 16, 2026 - POST-BIRTH CALL
        {
            id: "TL-049",
            timestamp: "2026-02-16T11:00:00+08:00",
            type: "voice_call",
            category: "communication",
            icon: "📞",
            title: "AI Congratulations & Coverage Confirmation Call",
            description: "Emma called to congratulate and confirm newborn coverage",
            details: {
                duration: "10 minutes 15 seconds",
                sentiment: "9.8/10 (Extremely Positive)",
                topicsCovered: ["Congratulations", "Baby coverage confirmation", "Education fund planning intro", "Critical illness rider for baby"],
                outcome: "Expressed interest in education planning"
            },
            color: "#9333EA",
            impact: "Upsell opportunity identified"
        },

        // MARCH 2026 - UPSELL OPPORTUNITY
        {
            id: "TL-050",
            timestamp: "2026-03-01T09:00:00+08:00",
            type: "campaign_enrollment",
            category: "system_action",
            icon: "🎯",
            title: "Enrolled in Education Planning Campaign",
            description: "Auto-enrolled in baby education savings nurture campaign",
            details: {
                campaign: "Child Education Planning for New Parents",
                duration: "45 days",
                expectedTouchpoints: 8,
                upsellTarget: "Education Endowment Plan ($150/month)"
            },
            color: "#9333EA"
        },
        {
            id: "TL-051",
            timestamp: "2026-03-05T14:00:00+08:00",
            type: "specialist_meeting",
            category: "communication",
            icon: "👤",
            title: "Education Planning Consultation",
            description: "Rachel Tan conducted baby education planning session",
            details: {
                duration: "45 minutes",
                specialist: "Rachel Tan",
                productsDiscussed: "Education Endowment Plan + Child Protection Rider",
                quotePresented: "$150/month",
                sentiment: "8.9/10 (Very Positive)",
                outcome: "Quote provided, considering options"
            },
            color: "#9333EA"
        },

        // MARCH 15, 2026 - SECOND PURCHASE
        {
            id: "TL-052",
            timestamp: "2026-03-15T16:00:00+08:00",
            type: "policy_purchased",
            category: "milestone",
            icon: "🎉",
            title: "UPSELL SUCCESS - Education Plan Purchased!",
            description: "Sarah purchased Education Endowment Plan for baby Emma",
            details: {
                policyNumber: "AIA-2026-EDU-847363",
                product: "Education Endowment Plan + Child Protection",
                monthlyPremium: "$150",
                totalMonthlyPremium: "$590 (combined)",
                lifetimeValue: "$95,000 (updated)",
                upsellSuccess: true
            },
            color: "#00C853",
            impact: "Lifetime Value: $63,000 → $95,000 (+$32,000)"
        },

        // LIFECYCLE PROGRESSION
        {
            id: "TL-053",
            timestamp: "2026-03-15T16:05:00+08:00",
            type: "lifecycle_stage_change",
            category: "milestone",
            icon: "🏆",
            title: "Lifecycle Stage: Loyal Customer",
            description: "Sarah achieved Loyal Customer status (2+ policies, 1 referral, NPS 9+)",
            details: {
                previousStage: "Active Customer",
                newStage: "Loyal Customer",
                activePolicies: 2,
                totalPremium: "$590/month",
                referralsMade: 1,
                npsScore: "9/10",
                customerSince: "Oct 23, 2025 (5 months)"
            },
            color: "#00C853",
            impact: "VIP Benefits Unlocked"
        }
    ],

    // Complete Touchpoint History
    touchpoints: [
        {
            id: "TP-008",
            number: 8,
            type: "voice_call",
            timestamp: "2025-10-15T19:32:00+08:00",
            duration: 0, // ongoing
            status: "in_progress",
            agent: {
                type: "ai",
                name: "Emma",
                avatar: "🤖"
            },
            campaign: "Pregnancy Nurture - Call #3",
            sentiment: 8.2,
            sentimentLabel: "Positive",
            intent: "high",
            engagement: "strong",
            outcome: "in_progress",
            conversionProbChange: +7,
            summary: "Discussing maternity coverage and competitor comparison",
            callSummary: {
                outcome: "📋 INFORMATION GATHERED",
                outcomeColor: "#00C853",
                conversionStart: 68,
                conversionEnd: 75,
                keyMoments: [
                    { time: "00:01:15", description: "Customer confirmed pregnancy (first child)" },
                    { time: "00:03:22", description: "Mentioned competitor quote from Prudential" },
                    { time: "00:05:40", description: "Expressed concerns about overwhelming information" },
                    { time: "00:06:55", description: "Agreed to receive detailed quote breakdown" }
                ],
                objections: [
                    { objection: "Too much information to process", resolution: "Offered to break down into simple steps" },
                    { objection: "Need to compare with Prudential", resolution: "Promised side-by-side comparison" }
                ],
                nextSteps: [
                    { text: "Send personalized quote breakdown", status: "completed" },
                    { text: "Include Prudential comparison", status: "completed" },
                    { text: "Schedule follow-up call in 2 days", status: "completed" }
                ]
            },
            transcript: [
                {
                    timestamp: "00:00:03",
                    speaker: "ai",
                    name: "Emma",
                    text: "Good evening, Sarah? This is Emma from AIA Singapore. Do you have a moment to chat?",
                    sentiment: 6.5,
                    sentimentLabel: "Neutral"
                },
                {
                    timestamp: "00:00:08",
                    speaker: "lead",
                    name: "Sarah Chen",
                    text: "Um, yes... who is this again?",
                    sentiment: 5.2,
                    sentimentLabel: "Confused"
                },
                {
                    timestamp: "00:00:11",
                    speaker: "ai",
                    name: "Emma",
                    text: "I'm Emma, calling from AIA. We noticed you're an existing member with us, and I wanted to reach out personally to congratulate you on your exciting news about expecting your first child. Is now a good time to talk?",
                    sentiment: 7.8,
                    sentimentLabel: "Positive"
                },
                {
                    timestamp: "00:00:22",
                    speaker: "lead",
                    name: "Sarah Chen",
                    text: "Oh... thank you! Yes, it's exciting. How did you know?",
                    sentiment: 7.9,
                    sentimentLabel: "Positive"
                },
                {
                    timestamp: "00:00:28",
                    speaker: "ai",
                    name: "Emma",
                    text: "As your insurance partner, we monitor key life moments to ensure you always have the right protection. Becoming a parent is one of the most important transitions, and we want to make sure you and your growing family are well-covered. Can I ask - have you had a chance to review your current coverage since your wonderful news?",
                    sentiment: 7.5,
                    sentimentLabel: "Positive"
                },
                {
                    timestamp: "00:00:42",
                    speaker: "lead",
                    name: "Sarah Chen",
                    text: "Not really... I've been meaning to look into it, but I'm not sure where to start.",
                    sentiment: 6.1,
                    sentimentLabel: "Uncertain"
                },
                {
                    timestamp: "00:00:48",
                    speaker: "ai",
                    name: "Emma",
                    text: "That's completely normal - there's so much to think about! I'd love to help simplify this for you. Based on your current hospitalization plan with us, I noticed there might be a few gaps as you prepare for your baby's arrival. Would you be interested in a quick 5-minute overview of what other parents-to-be typically consider?",
                    sentiment: 7.8,
                    sentimentLabel: "Helpful"
                },
                {
                    timestamp: "00:00:58",
                    speaker: "lead",
                    name: "Sarah Chen",
                    text: "Sure, that would be helpful actually.",
                    sentiment: 7.6,
                    sentimentLabel: "Receptive"
                },
                {
                    timestamp: "00:01:02",
                    speaker: "ai",
                    name: "Emma",
                    text: "Wonderful! So, most expecting mothers focus on three main areas. First is maternity coverage itself - ensuring delivery and prenatal care are covered. Your current plan doesn't include this, which could mean $15 to $25,000 in out-of-pocket expenses. Second is life insurance to protect your family's future. And third is coverage for your newborn from day one. Does this resonate with what you've been thinking about?",
                    sentiment: 7.4,
                    sentimentLabel: "Educational"
                },
                {
                    timestamp: "00:01:25",
                    speaker: "lead",
                    name: "Sarah Chen",
                    text: "Yes, exactly. I hadn't realized the gaps were that significant.",
                    sentiment: 7.2,
                    sentimentLabel: "Concerned"
                },
                {
                    timestamp: "00:01:30",
                    speaker: "ai",
                    name: "Emma",
                    text: "I'm glad we're having this conversation now while there's still time to get everything in place. Many parents wait until it's too late or face unexpected bills. Now, I know you mentioned you've been looking at other insurers - Prudential and Manulife, right? Would it be helpful if I showed you how our coverage compares side-by-side?",
                    sentiment: 7.9,
                    sentimentLabel: "Proactive"
                },
                {
                    timestamp: "00:01:48",
                    speaker: "lead",
                    name: "Sarah Chen",
                    text: "Yes, that would be great. I got a quote from Prudential for $320 a month.",
                    sentiment: 7.5,
                    sentimentLabel: "Interested"
                },
                {
                    timestamp: "00:01:54",
                    speaker: "ai",
                    name: "Emma",
                    text: "That's good to know. Let me be transparent with you - our goal isn't necessarily to be the cheapest, but to provide the most comprehensive protection tailored to your specific needs. With that Prudential quote, are you clear on exactly what's covered and what's not?",
                    sentiment: 7.3,
                    sentimentLabel: "Honest"
                },
                {
                    timestamp: "00:02:05",
                    speaker: "lead",
                    name: "Sarah Chen",
                    text: "Not entirely... it was a bit confusing actually.",
                    sentiment: 6.8,
                    sentimentLabel: "Confused"
                },
                {
                    timestamp: "00:02:09",
                    speaker: "ai",
                    name: "Emma",
                    text: "That's exactly why I'd love to connect you with Rachel Tan, our family protection specialist. She can do a detailed side-by-side comparison, show you exactly what you're getting with each option, and help you make an informed decision. She's helped over 200 expecting mothers this year alone. Would you be open to a call with her?",
                    sentiment: 8.1,
                    sentimentLabel: "Solution-focused"
                },
                {
                    timestamp: "00:02:28",
                    speaker: "lead",
                    name: "Sarah Chen",
                    text: "Okay, that actually sounds reasonable. When can she call?",
                    sentiment: 8.0,
                    sentimentLabel: "Agreeable"
                },
                {
                    timestamp: "00:02:32",
                    speaker: "ai",
                    name: "Emma",
                    text: "Fantastic! Let me check Rachel's calendar... She has availability tomorrow at 6 PM or Thursday at 7 PM. Which works better for you?",
                    sentiment: 7.8,
                    sentimentLabel: "Facilitating"
                },
                {
                    timestamp: "00:02:42",
                    speaker: "lead",
                    name: "Sarah Chen",
                    text: "Thursday at 7 PM works.",
                    sentiment: 7.6,
                    sentimentLabel: "Committed"
                },
                {
                    timestamp: "00:02:45",
                    speaker: "ai",
                    name: "Emma",
                    text: "Perfect! I've just booked that for you. Rachel will call you on Thursday at 7 PM. You'll receive a confirmation email with her direct number as well, just in case. In the meantime, if you could send over any competitor quotes you've received, Rachel can prepare a detailed comparison for your call. Does that sound good?",
                    sentiment: 8.3,
                    sentimentLabel: "Organized"
                },
                {
                    timestamp: "00:03:02",
                    speaker: "lead",
                    name: "Sarah Chen",
                    text: "Yes, that's great. Thank you, Emma!",
                    sentiment: 8.5,
                    sentimentLabel: "Satisfied"
                },
                {
                    timestamp: "00:03:06",
                    speaker: "ai",
                    name: "Emma",
                    text: "You're very welcome, Sarah. Rachel is excellent - you're in great hands. I'll check in with you after your call to see if you need anything else. Take care!",
                    sentiment: 8.2,
                    sentimentLabel: "Warm"
                }
            ],
            keyMoments: [
                { time: "00:00:22", description: "Sarah asks clarifying question (engagement signal)" },
                { time: "00:00:58", description: "Sarah agrees to overview (buy-in achieved)" },
                { time: "00:01:48", description: "Sarah shares competitor quote (trust indicator)" },
                { time: "00:02:28", description: "Sarah agrees to specialist call (conversion milestone)" },
                { time: "00:02:42", description: "Appointment confirmed (major win)" }
            ],
            aiActions: [
                "Appointment booked with Rachel Tan for Oct 17, 7 PM",
                "Calendar invite sent to Sarah",
                "Agent briefing auto-generated for Rachel",
                "Competitor analysis requested from Sarah",
                "Follow-up email scheduled for Oct 16",
                "Lead status updated to 'Sales-Ready'"
            ],
            recordingUrl: "/assets/audio/sarah-call-3.mp3"
        },
        {
            id: "TP-007",
            number: 7,
            type: "sms",
            timestamp: "2025-10-11T07:15:00+08:00",
            status: "completed",
            agent: {
                type: "ai",
                name: "Emma",
                avatar: "🤖"
            },
            campaign: "Mid-nurture engagement",
            sentiment: 7.5,
            sentimentLabel: "Positive",
            engagement: "high",
            outcome: "replied",
            responseTime: "2 hours",
            conversionProbChange: +7,
            summary: "Check-in SMS - Sarah responded positively",
            messages: [
                {
                    from: "ai",
                    time: "07:15",
                    text: "Hi Sarah, it's Emma from AIA 😊 Just a quick check-in - how are you feeling? I know the first trimester can be tough! If you have any quick questions about your coverage, feel free to reply or I can give you a call. No pressure - just here to help! - Emma"
                },
                {
                    from: "lead",
                    time: "09:23",
                    text: "Thanks Emma! Feeling better now. Still haven't decided on the insurance yet but appreciate you checking in."
                },
                {
                    from: "ai",
                    time: "09:25",
                    text: "So glad you're feeling better! Take all the time you need - your health comes first. I'll reach out again in a couple of weeks. In the meantime, if anything comes up, you know where to find me! 😊"
                }
            ],
            aiAnalysis: "Positive engagement signal - Sarah responded voluntarily. No buying intent yet, but relationship building successful. Next action: Schedule call for entering 2nd trimester (higher intent window)."
        },

        // POST-PURCHASE TOUCHPOINTS - CUSTOMER LIFECYCLE
        // TP-009: Specialist Meeting (Oct 17)
        {
            id: "TP-009",
            number: 9,
            type: "specialist_meeting",
            timestamp: "2025-10-17T14:00:00+08:00",
            duration: 3480, // 58 minutes
            status: "completed",
            agent: {
                type: "human",
                name: "Rachel Tan",
                title: "Senior Maternity Specialist",
                avatar: "👤"
            },
            campaign: "High-Value Lead Consultation",
            sentiment: 9.2,
            sentimentLabel: "Excellent",
            intent: "very_high",
            engagement: "excellent",
            outcome: "quote_provided",
            conversionProbChange: +7,
            summary: "Comprehensive maternity coverage consultation. Rachel presented personalized bundle, addressed affordability concerns, and set 5-day decision timeline. Excellent rapport built.",
            meetingNotes: [
                {
                    time: "14:00",
                    speaker: "Rachel Tan",
                    note: "Welcomed Sarah, congratulated on pregnancy, reviewed current coverage"
                },
                {
                    time: "14:08",
                    speaker: "Sarah Chen",
                    note: "Expressed concern about affordability, mentioned husband needs to be involved in decision"
                },
                {
                    time: "14:15",
                    speaker: "Rachel Tan",
                    note: "Presented maternity bundle ($440/month), broke down cost per coverage type, showed payment flexibility options"
                },
                {
                    time: "14:30",
                    speaker: "Sarah Chen",
                    note: "Asked about competitors, mentioned Prudential quote of $320/month"
                },
                {
                    time: "14:35",
                    speaker: "Rachel Tan",
                    note: "Conducted side-by-side comparison, highlighted AIA's superior maternity coverage and newborn benefits"
                },
                {
                    time: "14:45",
                    speaker: "Sarah Chen",
                    note: "Understood value proposition, requested time to discuss with husband"
                },
                {
                    time: "14:52",
                    speaker: "Rachel Tan",
                    note: "Agreed to 5-day decision window, offered new parent pricing (expires Oct 22), scheduled follow-up"
                }
            ],
            documentsProvided: ["Quote breakdown", "Payment options", "Coverage comparison chart", "FAQ document"],
            nextSteps: "Sarah to discuss with husband, decision by Oct 22"
        },

        // TP-010: Post-Meeting Email (Oct 17)
        {
            id: "TP-010",
            number: 10,
            type: "email",
            timestamp: "2025-10-17T15:30:00+08:00",
            status: "sent",
            agent: {
                type: "ai",
                name: "Emma",
                avatar: "🤖"
            },
            campaign: "Post-Meeting Nurture",
            sentiment: 8.5,
            sentimentLabel: "Very Positive",
            summary: "Automated post-meeting recap email with quote and attachments",
            emailContent: {
                subject: "Great Meeting Today, Sarah! Here's Your Personalized Quote",
                from: "Rachel Tan <rachel.tan@aia.com>",
                to: "Sarah Chen <sarah.chen@email.com>",
                body: `Hi Sarah,

It was wonderful meeting you today! Thank you for taking the time to discuss your family's protection needs.

As promised, I've attached your personalized quote for the comprehensive maternity bundle we discussed:

**Your Personalized Bundle:**
• Maternity Protection Plan: $180/month
• Life Insurance ($500K): $120/month
• Critical Illness Rider: $95/month
• Newborn Coverage Package: $45/month

**Total: $440/month** (New Parent Special Pricing - valid until Oct 22)

**Payment Options:**
✓ Monthly auto-debit (Credit Card/GIRO)
✓ Quarterly payment (5% discount)
✓ Annual payment (10% discount)

**What's Included:**
✓ Full delivery coverage up to $25K
✓ Prenatal care & complications
✓ $500K family protection
✓ Baby covered from day 1
✓ No waiting periods (for you & baby)

I've also attached the side-by-side comparison with Prudential you requested. As you'll see, AIA offers superior maternity and newborn coverage at a competitive price.

**Next Steps:**
Please discuss with your husband and let me know by **October 22** to lock in your new parent pricing. I'm here if you have any questions!

Warmly,
Rachel Tan
Senior Maternity Specialist, AIA Singapore
📞 +65 9234 5678`,
                attachments: [
                    "AIA_Quote_SarahChen_Oct2025.pdf",
                    "Payment_Options.pdf",
                    "AIA_vs_Prudential_Comparison.pdf",
                    "Maternity_FAQ.pdf"
                ]
            }
        },

        // TP-011: Quote Email Opened (Oct 18)
        {
            id: "TP-011",
            number: 11,
            type: "email_engagement",
            timestamp: "2025-10-18T10:15:00+08:00",
            status: "engaged",
            agent: {
                type: "ai",
                name: "System",
                avatar: "📧"
            },
            campaign: "Email Tracking",
            sentiment: 8.0,
            sentimentLabel: "Positive",
            engagement: "high",
            summary: "Sarah opened quote email and reviewed all attachments",
            engagementData: {
                opened: true,
                openedAt: "2025-10-18T10:15:00+08:00",
                timeSpent: "5 minutes 42 seconds",
                device: "iPhone 14",
                location: "Singapore",
                linksClicked: 3,
                clickedLinks: [
                    "Payment calculator",
                    "Coverage details - Maternity",
                    "FAQ - Newborn coverage"
                ],
                attachmentsDownloaded: ["AIA_Quote_SarahChen_Oct2025.pdf"],
                readComplete: true
            },
            aiAnalysis: "Strong buying signal - spent 5+ minutes reviewing quote, downloaded PDF, clicked payment calculator. High intent. Next action: SMS check-in within 24 hours."
        },

        // TP-012: Post-Meeting SMS Check-in (Oct 18)
        {
            id: "TP-012",
            number: 12,
            type: "sms",
            timestamp: "2025-10-18T19:30:00+08:00",
            status: "sent",
            agent: {
                type: "ai",
                name: "Emma",
                avatar: "🤖"
            },
            campaign: "Post-Meeting Nurture",
            sentiment: 7.5,
            sentimentLabel: "Friendly",
            summary: "AI sent personalized follow-up SMS",
            messages: [
                {
                    from: "ai",
                    time: "19:30",
                    text: "Hi Sarah! Hope yesterday's meeting was helpful. Any questions about the maternity coverage package? Rachel and I are here to help! - Emma 😊"
                }
            ]
        },

        // TP-013: Decision Support Call (Oct 20)
        {
            id: "TP-013",
            number: 13,
            type: "voice_call",
            timestamp: "2025-10-20T20:15:00+08:00",
            duration: 572, // 9 min 32 sec
            status: "completed",
            agent: {
                type: "ai",
                name: "Emma",
                avatar: "🤖"
            },
            campaign: "Decision Support",
            sentiment: 7.8,
            sentimentLabel: "Positive",
            intent: "high",
            engagement: "strong",
            outcome: "objection_identified",
            conversionProbChange: 0,
            summary: "Emma called to support decision-making. Sarah mentioned need to discuss with husband. AI identified joint decision-making process and sent targeted content.",
            transcript: [
                {
                    timestamp: "00:00:05",
                    speaker: "ai",
                    name: "Emma",
                    text: "Hi Sarah! It's Emma from AIA. Do you have a quick moment?",
                    sentiment: 7.0,
                    sentimentLabel: "Friendly"
                },
                {
                    timestamp: "00:00:10",
                    speaker: "lead",
                    name: "Sarah Chen",
                    text: "Oh hi Emma! Yes, I have a few minutes.",
                    sentiment: 7.5,
                    sentimentLabel: "Receptive"
                },
                {
                    timestamp: "00:00:15",
                    speaker: "ai",
                    name: "Emma",
                    text: "Great! I just wanted to check in after your meeting with Rachel. How are you feeling about the coverage package she presented?",
                    sentiment: 7.5,
                    sentimentLabel: "Supportive"
                },
                {
                    timestamp: "00:00:28",
                    speaker: "lead",
                    name: "Sarah Chen",
                    text: "It was really helpful, actually. Rachel explained everything clearly. I just need to go through it with my husband tonight.",
                    sentiment: 8.0,
                    sentimentLabel: "Positive"
                },
                {
                    timestamp: "00:00:42",
                    speaker: "ai",
                    name: "Emma",
                    text: "That makes perfect sense! These are important decisions to make together. Is there anything specific you'd like me to clarify before you chat with him?",
                    sentiment: 8.2,
                    sentimentLabel: "Understanding"
                },
                {
                    timestamp: "00:00:58",
                    speaker: "lead",
                    name: "Sarah Chen",
                    text: "Maybe just... how does the payment work? Like, can we change it later if our financial situation changes?",
                    sentiment: 7.0,
                    sentimentLabel: "Concerned"
                },
                {
                    timestamp: "00:01:10",
                    speaker: "ai",
                    name: "Emma",
                    text: "Absolutely! You have flexibility. You can switch between monthly, quarterly, or annual payments at any time. And if you need to adjust coverage later, Rachel can help you review your options. The important thing is starting with what feels comfortable now.",
                    sentiment: 8.5,
                    sentimentLabel: "Reassuring"
                },
                {
                    timestamp: "00:01:35",
                    speaker: "lead",
                    name: "Sarah Chen",
                    text: "Okay, that's good to know. I think we just need to sit down together and go through the numbers.",
                    sentiment: 7.8,
                    sentimentLabel: "Thoughtful"
                },
                {
                    timestamp: "00:01:45",
                    speaker: "ai",
                    name: "Emma",
                    text: "Perfect! I'm actually going to send you a quick guide designed for couples making insurance decisions together. It has a simple checklist and some questions to discuss. Would that be helpful?",
                    sentiment: 8.0,
                    sentimentLabel: "Helpful"
                },
                {
                    timestamp: "00:02:00",
                    speaker: "lead",
                    name: "Sarah Chen",
                    text: "Yes, that would be great! Thank you, Emma.",
                    sentiment: 8.5,
                    sentimentLabel: "Grateful"
                }
            ],
            aiAnalysis: "Joint decision-making process identified. Sarah is positive but needs husband buy-in. Auto-triggered couple's decision guide email. Decision expected within 48 hours."
        },

        // TP-014: Couple's Decision Guide Email (Oct 20)
        {
            id: "TP-014",
            number: 14,
            type: "email",
            timestamp: "2025-10-20T20:30:00+08:00",
            status: "sent",
            agent: {
                type: "ai",
                name: "Emma",
                avatar: "🤖"
            },
            campaign: "Decision Support - Couples",
            sentiment: 8.0,
            sentimentLabel: "Supportive",
            summary: "AI auto-sent targeted content for joint decision-making",
            emailContent: {
                subject: "Making Insurance Decisions Together 💑",
                from: "Emma (AI Assistant) <emma.ai@aia.com>",
                to: "Sarah Chen <sarah.chen@email.com>",
                body: `Hi Sarah,

As promised, here's a guide to help you and your husband discuss your family's insurance needs together!

**Decision Checklist for Couples:**

✓ What are our biggest worries if something unexpected happens?
✓ How would we manage financially if one of us couldn't work?
✓ What coverage do we already have? (employer, existing policies)
✓ What gaps do we need to fill before baby arrives?
✓ Can we afford $440/month comfortably? (that's $14.50/day)
✓ What would happen if we don't have maternity coverage?

**Real Story from a Young Family Like Yours:**

"My husband and I were also hesitant about the cost at first. But when our baby arrived 3 weeks early with complications, our AIA policy covered $22,000 in medical bills. We paid $0 out of pocket. Best decision we ever made."
- Michelle & David, Parents to baby Ethan

**Questions to Discuss:**
1. If delivery costs $20K+ out of pocket, where would we get that money?
2. If I (Sarah) couldn't work after pregnancy complications, how long could we manage on one income?
3. What happens to our baby financially if something happens to one of us?

**Remember:** You don't have to decide everything tonight. Start the conversation, see how you both feel, and Rachel or I are here to answer any questions that come up!

Emma 😊
Your AI Insurance Assistant`,
                attachments: ["Couples_Decision_Guide.pdf", "Young_Parents_Testimonial.pdf"]
            }
        },

        // TP-015: Late Night Email Review (Oct 21)
        {
            id: "TP-015",
            number: 15,
            type: "email_engagement",
            timestamp: "2025-10-21T22:45:00+08:00",
            status: "engaged",
            agent: {
                type: "ai",
                name: "System",
                avatar: "📧"
            },
            campaign: "Email Tracking",
            sentiment: 9.0,
            sentimentLabel: "Very Positive",
            engagement: "excellent",
            summary: "Sarah and husband reviewed couple's guide together at 10:45 PM - strong buying signal",
            engagementData: {
                opened: true,
                openedAt: "2025-10-21T22:45:00+08:00",
                timeSpent: "8 minutes 15 seconds",
                device: "iPad",
                location: "Home WiFi - Singapore",
                linksClicked: 5,
                clickedLinks: [
                    "Testimonials from young parents",
                    "Payment calculator",
                    "Coverage comparison - Maternity vs Basic",
                    "FAQ - What if we can't afford it later",
                    "Rachel Tan contact"
                ],
                attachmentsDownloaded: ["Couples_Decision_Guide.pdf"],
                readComplete: true,
                multipleDevices: true // Shared review session
            },
            aiAnalysis: "CRITICAL BUYING SIGNAL: Late night joint review session (8+ minutes), multiple clicks, downloaded checklist. Couple is actively making decision together. Conversion probability increased to 85%. Recommend urgency SMS tomorrow morning."
        },

        // TP-016: Decision Deadline Reminder SMS (Oct 22)
        {
            id: "TP-016",
            number: 16,
            type: "sms",
            timestamp: "2025-10-22T09:00:00+08:00",
            status: "sent",
            agent: {
                type: "ai",
                name: "Emma",
                avatar: "🤖"
            },
            campaign: "Urgency - Decision Deadline",
            sentiment: 7.5,
            sentimentLabel: "Friendly Urgency",
            summary: "AI sent gentle urgency reminder about special pricing expiration",
            messages: [
                {
                    from: "ai",
                    time: "09:00",
                    text: "Hi Sarah! Just a friendly reminder - your special new parent pricing ($440/month) expires today. I know you and your husband are still deciding. If you need more time, just let me know and I'll see what I can do! 😊 - Emma"
                }
            ]
        },

        // TP-017: CONVERSION CALL (Oct 22) 🎉
        {
            id: "TP-017",
            number: 17,
            type: "voice_call",
            timestamp: "2025-10-22T16:20:00+08:00",
            duration: 372, // 6 min 12 sec
            status: "completed",
            agent: {
                type: "ai",
                name: "Emma",
                avatar: "🤖"
            },
            campaign: "Decision Day - Conversion",
            sentiment: 9.5,
            sentimentLabel: "Extremely Positive",
            intent: "conversion",
            engagement: "excellent",
            outcome: "PURCHASE_DECISION_MADE",
            conversionProbChange: +25, // 75% → 100%
            summary: "🎉 CONVERSION! Sarah called in: 'We've decided to go ahead!' Transferred to Rachel for application processing.",
            transcript: [
                {
                    timestamp: "00:00:02",
                    speaker: "lead",
                    name: "Sarah Chen",
                    text: "Hi, is this Emma?",
                    sentiment: 8.0,
                    sentimentLabel: "Eager"
                },
                {
                    timestamp: "00:00:05",
                    speaker: "ai",
                    name: "Emma",
                    text: "Yes! Hi Sarah! How are you?",
                    sentiment: 9.0,
                    sentimentLabel: "Excited"
                },
                {
                    timestamp: "00:00:08",
                    speaker: "lead",
                    name: "Sarah Chen",
                    text: "Good! My husband and I talked it over, and we've decided to go ahead with the maternity package.",
                    sentiment: 9.5,
                    sentimentLabel: "Decided"
                },
                {
                    timestamp: "00:00:18",
                    speaker: "ai",
                    name: "Emma",
                    text: "That's wonderful news, Sarah! I'm so happy for you! This is such a great decision for your growing family. Let me get Rachel on the line to help you complete the application. Is now a good time?",
                    sentiment: 10.0,
                    sentimentLabel: "Thrilled"
                },
                {
                    timestamp: "00:00:32",
                    speaker: "lead",
                    name: "Sarah Chen",
                    text: "Yes, perfect timing! We're ready.",
                    sentiment: 9.0,
                    sentimentLabel: "Ready"
                },
                {
                    timestamp: "00:00:38",
                    speaker: "ai",
                    name: "Emma",
                    text: "Excellent! Transferring you to Rachel now. Congratulations again, Sarah! This is going to give you so much peace of mind.",
                    sentiment: 9.5,
                    sentimentLabel: "Congratulatory"
                }
            ],
            aiAnalysis: "🎉 CONVERSION ACHIEVED! Lead → Customer. Sarah called in proactively (strong buying signal). Joint decision made with husband. Transferred to Rachel Tan for application. Expected policy value: $63,000 LTV."
        },

        // TP-018: Welcome Onboarding Email (Oct 24)
        {
            id: "TP-018",
            number: 18,
            type: "email",
            timestamp: "2025-10-24T09:00:00+08:00",
            status: "sent",
            agent: {
                type: "ai",
                name: "System",
                avatar: "🎉"
            },
            campaign: "Customer Onboarding",
            sentiment: 9.0,
            sentimentLabel: "Welcome",
            summary: "Customer onboarding sequence initiated - Welcome to AIA Family",
            emailContent: {
                subject: "Welcome to the AIA Family, Sarah! 🎉",
                from: "AIA Customer Success <welcome@aia.com>",
                to: "Sarah Chen <sarah.chen@email.com>",
                body: `Dear Sarah,

Welcome to AIA! 🎉

Congratulations on taking this important step to protect your growing family. Your policy is now active, and we're thrilled to have you as part of the AIA family!

**Your Policy Details:**
Policy Number: AIA-2025-MAT-847362
Coverage Start Date: October 23, 2025
Monthly Premium: $440 (auto-debit on 1st of each month)

**What's Covered:**
✓ Maternity Protection Plan ($180/month)
✓ Life Insurance $500K ($120/month)
✓ Critical Illness Rider ($95/month)
✓ Newborn Coverage Package ($45/month)

**Getting Started:**

1. **Download the AIA App**
   Access your policy documents, file claims, and contact support 24/7
   [Download iOS] [Download Android]

2. **Review Your Policy Documents**
   All documents attached to this email (also available in the app)

3. **Know How to File a Claim**
   Quick Start Guide attached - read this before your delivery date!

4. **24/7 Customer Support**
   📞 Hotline: 1800-248-8000
   💬 WhatsApp: +65 9000 1234
   📧 Email: support@aia.com

**What Happens Next:**

- Today: Account activation email (separate)
- Oct 27: Emma will call to walk you through your coverage
- Nov 1: First educational email about prenatal care
- Ongoing: Regular check-ins and support throughout your pregnancy

**Your Dedicated Team:**
- Rachel Tan (Specialist): rachel.tan@aia.com
- Emma (AI Assistant): Available 24/7 via app
- Customer Success: 1800-248-8000

Thank you for choosing AIA to protect what matters most. We're honored to be part of your family's journey!

Warmly,
The AIA Family

P.S. Don't forget to add your baby to the policy within 30 days of birth for seamless coverage from day 1!`,
                attachments: [
                    "Policy_Documents_AIA-2025-MAT-847362.pdf",
                    "Quick_Start_Guide_Claims.pdf",
                    "AIA_Mobile_App_Guide.pdf",
                    "Maternity_Coverage_Handbook.pdf"
                ]
            }
        },

        // TP-019: Mobile App Setup SMS (Oct 25)
        {
            id: "TP-019",
            number: 19,
            type: "sms",
            timestamp: "2025-10-25T10:00:00+08:00",
            status: "sent",
            agent: {
                type: "ai",
                name: "Emma",
                avatar: "🤖"
            },
            campaign: "Customer Onboarding",
            sentiment: 8.0,
            sentimentLabel: "Helpful",
            summary: "SMS reminder to activate mobile app features",
            messages: [
                {
                    from: "ai",
                    time: "10:00",
                    text: "Welcome to AIA, Sarah! 🎉 Your policy is active. Download our app to access your coverage anytime: https://aia.app/download Use code: SARAH2025 - Emma"
                }
            ]
        },

        // TP-020: Onboarding Education Call (Oct 27)
        {
            id: "TP-020",
            number: 20,
            type: "voice_call",
            timestamp: "2025-10-27T19:00:00+08:00",
            duration: 740, // 12 min 20 sec
            status: "completed",
            agent: {
                type: "ai",
                name: "Emma",
                avatar: "🤖"
            },
            campaign: "Customer Onboarding Education",
            sentiment: 8.8,
            sentimentLabel: "Very Positive",
            engagement: "excellent",
            outcome: "educated",
            summary: "Emma conducted comprehensive onboarding walkthrough of maternity benefits, claim filing process, and hospital selection",
            transcript: [
                {
                    timestamp: "00:00:05",
                    speaker: "ai",
                    name: "Emma",
                    text: "Hi Sarah! It's Emma. Congratulations again on your new policy! I wanted to take a few minutes to walk you through everything so you know exactly how to use your coverage. Is now a good time?",
                    sentiment: 8.5,
                    sentimentLabel: "Welcoming"
                },
                {
                    timestamp: "00:00:22",
                    speaker: "lead",
                    name: "Sarah Chen",
                    text: "Yes, perfect! I actually have some questions about how the maternity coverage works.",
                    sentiment: 8.0,
                    sentimentLabel: "Engaged"
                },
                {
                    timestamp: "00:00:30",
                    speaker: "ai",
                    name: "Emma",
                    text: "Great! Let's start there. Your maternity coverage kicks in immediately - no waiting period. It covers prenatal care, delivery, and any complications up to $25,000. You can go to any hospital in Singapore, but AIA has partnerships with Thomson Medical, Mt. Elizabeth, and Raffles Hospital for direct billing.",
                    sentiment: 8.5,
                    sentimentLabel: "Educational"
                },
                {
                    timestamp: "00:01:05",
                    speaker: "lead",
                    name: "Sarah Chen",
                    text: "Oh, that's good to know. I was planning to deliver at Thomson Medical since that's where I had my first appointment.",
                    sentiment: 8.2,
                    sentimentLabel: "Positive"
                },
                {
                    timestamp: "00:01:15",
                    speaker: "ai",
                    name: "Emma",
                    text: "Perfect choice! Thomson Medical is one of our partner hospitals. Here's what you need to know: When you check in for delivery, just tell them you have AIA coverage and give them your policy number. They'll bill us directly, so you won't need to pay upfront. Just keep all receipts for any extras not covered.",
                    sentiment: 9.0,
                    sentimentLabel: "Helpful"
                },
                {
                    timestamp: "00:01:45",
                    speaker: "lead",
                    name: "Sarah Chen",
                    text: "That's so helpful! What about prenatal checkups? Do I need to claim those separately?",
                    sentiment: 7.8,
                    sentimentLabel: "Curious"
                },
                {
                    timestamp: "00:01:55",
                    speaker: "ai",
                    name: "Emma",
                    text: "Yes! For prenatal visits, you'll pay first and then submit a claim through the AIA app. Just take a photo of your receipt and submit it. Most claims are approved within 3 business days, and the money goes straight to your bank account.",
                    sentiment: 8.5,
                    sentimentLabel: "Instructive"
                },
                {
                    timestamp: "00:02:15",
                    speaker: "lead",
                    name: "Sarah Chen",
                    text: "Got it. And the baby coverage - when does that start?",
                    sentiment: 8.0,
                    sentimentLabel: "Interested"
                },
                {
                    timestamp: "00:02:22",
                    speaker: "ai",
                    name: "Emma",
                    text: "Your newborn coverage starts from day 1 of birth! Within 30 days after baby arrives, just call us or update through the app to add baby to your policy. No health screening required, and all congenital conditions are covered. Your baby basically gets the same protection from the moment they're born.",
                    sentiment: 9.2,
                    sentimentLabel: "Reassuring"
                },
                {
                    timestamp: "00:02:50",
                    speaker: "lead",
                    name: "Sarah Chen",
                    text: "Wow, that's amazing. I didn't realize it was that comprehensive.",
                    sentiment: 9.0,
                    sentimentLabel: "Impressed"
                },
                {
                    timestamp: "00:03:00",
                    speaker: "ai",
                    name: "Emma",
                    text: "That's exactly why Rachel recommended this package for you! Now, let me quickly cover emergency situations. If you need to go to A&E for pregnancy complications, go immediately - don't wait. Just keep all documents and call our 24/7 hotline afterward. They'll guide you through the claim process.",
                    sentiment: 8.8,
                    sentimentLabel: "Important"
                },
                {
                    timestamp: "00:03:30",
                    speaker: "lead",
                    name: "Sarah Chen",
                    text: "Okay, good to know. Hopefully I won't need that!",
                    sentiment: 7.5,
                    sentimentLabel: "Nervous"
                },
                {
                    timestamp: "00:03:36",
                    speaker: "ai",
                    name: "Emma",
                    text: "Exactly - we hope you won't either! But it's there if you need it. That's the whole point of insurance - peace of mind. Do you have any other questions about your coverage?",
                    sentiment: 8.5,
                    sentimentLabel: "Supportive"
                },
                {
                    timestamp: "00:03:50",
                    speaker: "lead",
                    name: "Sarah Chen",
                    text: "I think that covers it for now. This was really helpful, Emma. Thank you!",
                    sentiment: 9.0,
                    sentimentLabel: "Grateful"
                },
                {
                    timestamp: "00:04:00",
                    speaker: "ai",
                    name: "Emma",
                    text: "My pleasure, Sarah! I'll be checking in periodically throughout your pregnancy. If anything comes up before then, you can always reach me through the app 24/7, or call our support line. Take care!",
                    sentiment: 9.0,
                    sentimentLabel: "Caring"
                }
            ],
            aiAnalysis: "Successful onboarding call. Sarah now fully educated on: how to use maternity coverage, claim filing process, hospital selection, newborn coverage activation, emergency procedures. Customer satisfaction high. No outstanding questions."
        },

        // TP-021: Educational Email Series #1 (Nov 1)
        {
            id: "TP-021",
            number: 21,
            type: "email",
            timestamp: "2025-11-01T09:00:00+08:00",
            status: "sent",
            agent: {
                type: "ai",
                name: "System",
                avatar: "📧"
            },
            campaign: "Maternity Journey Education",
            sentiment: 8.0,
            sentimentLabel: "Educational",
            summary: "Customer education campaign - Prenatal care checklist",
            emailContent: {
                subject: "Your Prenatal Care Checklist - What's Covered? ✓",
                from: "AIA Maternity Support <maternity@aia.com>",
                to: "Sarah Chen <sarah.chen@email.com>",
                body: `Hi Sarah,

Welcome to the AIA Maternity Journey! Over the next few months, we'll be sending you helpful guides to make sure you're getting the most out of your coverage.

**Today's Topic: Your Prenatal Care Checklist**

Here's what's covered at each stage of your pregnancy:

**First Trimester (Weeks 1-12):**
✓ Initial prenatal visit & blood work
✓ Ultrasound scans
✓ Genetic screening tests
✓ Pregnancy vitamins (if prescribed)

**Second Trimester (Weeks 13-26):**
✓ Detailed anatomy scan
✓ Glucose tolerance test
✓ Regular checkups (every 4 weeks)
✓ Specialist consultations if needed

**Third Trimester (Weeks 27-40):**
✓ Weekly checkups (from week 36)
✓ Final ultrasounds
✓ Prenatal classes
✓ Pre-delivery consultations

**What to Bring to Every Appointment:**
1. AIA policy card (in your app)
2. Doctor's referral (if seeing specialist)
3. Previous medical reports
4. List of questions for your doctor

**How to Claim:**
1. Pay for visit
2. Get itemized receipt
3. Open AIA app → Claims → Upload photo
4. Money in your account within 3 days!

**Partner Hospital Benefits:**
If you're delivering at Thomson Medical, Mt. Elizabeth, or Raffles - enjoy direct billing (no upfront payment)!

Have questions? Reply to this email or chat with Emma 24/7 in the app!

Your AIA Maternity Support Team`,
                attachments: ["Prenatal_Care_Checklist.pdf", "Covered_Procedures_Guide.pdf"]
            }
        },

        // TP-022: Birthday SMS Greeting (Nov 8)
        {
            id: "TP-022",
            number: 22,
            type: "sms",
            timestamp: "2025-11-08T08:00:00+08:00",
            status: "sent",
            agent: {
                type: "ai",
                name: "Emma",
                avatar: "🤖"
            },
            campaign: "Birthday Recognition",
            sentiment: 9.5,
            sentimentLabel: "Celebratory",
            summary: "Birthday trigger - Personalized greeting with $50 gift credit",
            messages: [
                {
                    from: "ai",
                    time: "08:00",
                    text: "Happy Birthday Sarah! 🎂🎉 Wishing you a wonderful year ahead as you prepare to welcome your little one! As a gift, here's a $50 credit on your next premium. Enjoy your special day! - Emma & the AIA Team ❤️"
                },
                {
                    from: "lead",
                    time: "10:30",
                    text: "Thank you so much! This is so thoughtful 😊"
                }
            ],
            aiAnalysis: "Birthday recognition successful. Customer responded warmly. NPS likely increased to 9/10 (Promoter). Small gestures build loyalty."
        },

        // TP-023: Educational Email Series #2 (Nov 15)
        {
            id: "TP-023",
            number: 23,
            type: "email",
            timestamp: "2025-11-15T09:00:00+08:00",
            status: "sent",
            agent: {
                type: "ai",
                name: "System",
                avatar: "📧"
            },
            campaign: "Maternity Journey Education",
            sentiment: 8.0,
            sentimentLabel: "Helpful",
            summary: "Educational series - Preparing for delivery (insurance edition)",
            emailContent: {
                subject: "Preparing for Delivery: Insurance Edition 🏥",
                from: "AIA Maternity Support <maternity@aia.com>",
                to: "Sarah Chen <sarah.chen@email.com>",
                body: `Hi Sarah,

As you enter your second trimester, it's time to start thinking about delivery day - not just baby names and nursery colors, but also the practical stuff like insurance!

**Your Delivery Day Insurance Checklist:**

**What to Pack (Insurance Docs):**
✓ AIA policy card (digital in app is fine!)
✓ Your IC/passport
✓ Husband's IC (as policy nominee)
✓ This checklist (print or save on phone)

**Hospital Admission Process:**

Step 1: Check in at Admissions
- Tell them: "I have AIA maternity coverage"
- Give policy number: AIA-2025-MAT-847362
- They'll verify coverage instantly

Step 2: Direct Billing Setup
- Hospital bills AIA directly
- You won't pay anything upfront (up to $25K covered)
- Only extras (room upgrades, special meals) need payment

Step 3: After Delivery
- Get itemized bill from hospital
- Review what was billed to AIA
- Keep copies for your records

**What's Covered:**
✓ Normal delivery: $8,000-$12,000
✓ C-section: $12,000-$18,000
✓ Complications: Up to $25,000
✓ Epidural: Fully covered
✓ Hospital stay (standard ward): Covered
✓ Newborn's first checks: Covered

**What's NOT Covered:**
✗ Private suite upgrade (you pay difference)
✗ Special meals beyond standard
✗ Cosmetic procedures
✗ Non-medical requests

**Emergency Contacts (Save These!):**
- AIA 24/7 Hotline: 1800-248-8000
- Rachel Tan (Your Specialist): +65 9234 5678
- Claims Support WhatsApp: +65 9000 1234

**Pro Tip:** Call AIA 24-48 hours before your scheduled delivery (or immediately if emergency) so we can pre-authorize the hospital. This makes check-in even smoother!

Any questions? We're here 24/7!

Your AIA Maternity Team`,
                attachments: ["Delivery_Day_Checklist.pdf", "Hospital_Admission_Guide.pdf"]
            }
        },

        // TP-024: 30-Day Customer Success Review Call (Dec 1)
        {
            id: "TP-024",
            number: 24,
            type: "voice_call",
            timestamp: "2025-12-01T15:00:00+08:00",
            duration: 525, // 8 min 45 sec
            status: "completed",
            agent: {
                type: "ai",
                name: "Emma",
                avatar: "🤖"
            },
            campaign: "Customer Success - 30 Day Review",
            sentiment: 9.2,
            sentimentLabel: "Excellent",
            engagement: "excellent",
            outcome: "nps_collected",
            summary: "Emma conducted 30-day satisfaction survey and coverage review. Sarah gave NPS 9/10 (Promoter), requested referral information for friend Lisa.",
            transcript: [
                {
                    timestamp: "00:00:05",
                    speaker: "ai",
                    name: "Emma",
                    text: "Hi Sarah! It's Emma from AIA. How are you doing?",
                    sentiment: 8.0,
                    sentimentLabel: "Friendly"
                },
                {
                    timestamp: "00:00:10",
                    speaker: "lead",
                    name: "Sarah Chen",
                    text: "Hi Emma! I'm good, thanks! Feeling much better now that I'm in the second trimester.",
                    sentiment: 8.5,
                    sentimentLabel: "Positive"
                },
                {
                    timestamp: "00:00:20",
                    speaker: "ai",
                    name: "Emma",
                    text: "That's wonderful to hear! I wanted to check in - it's been about a month since you started your coverage. How has your experience with AIA been so far?",
                    sentiment: 8.0,
                    sentimentLabel: "Interested"
                },
                {
                    timestamp: "00:00:35",
                    speaker: "lead",
                    name: "Sarah Chen",
                    text: "Honestly, it's been great! I had a prenatal checkup last week and the claim was so easy. I just uploaded the receipt in the app and got the money back in like 2 days.",
                    sentiment: 9.0,
                    sentimentLabel: "Satisfied"
                },
                {
                    timestamp: "00:00:55",
                    speaker: "ai",
                    name: "Emma",
                    text: "I'm so glad to hear that! Quick question - on a scale of 0 to 10, how likely are you to recommend AIA to a friend or family member?",
                    sentiment: 7.5,
                    sentimentLabel: "Survey"
                },
                {
                    timestamp: "00:01:05",
                    speaker: "lead",
                    name: "Sarah Chen",
                    text: "Oh, definitely a 9! Rachel was amazing, and you've been so helpful. The whole process was way easier than I expected.",
                    sentiment: 9.5,
                    sentimentLabel: "Enthusiastic"
                },
                {
                    timestamp: "00:01:20",
                    speaker: "ai",
                    name: "Emma",
                    text: "That's wonderful feedback, thank you! I'm curious - what would make it a 10 for you?",
                    sentiment: 8.0,
                    sentimentLabel: "Curious"
                },
                {
                    timestamp: "00:01:30",
                    speaker: "lead",
                    name: "Sarah Chen",
                    text: "Hmm, I guess just... maybe if the app had a pregnancy tracker or something? Like, reminders for when to do certain tests based on my due date. Just a nice-to-have!",
                    sentiment: 8.0,
                    sentimentLabel: "Thoughtful"
                },
                {
                    timestamp: "00:01:50",
                    speaker: "ai",
                    name: "Emma",
                    text: "That's brilliant feedback! I'm going to pass that along to our product team. Actually, we do have a pregnancy timeline in the education section of the app - let me send you a link! And speaking of recommendations... you mentioned friends. Do you know anyone else who might need maternity coverage?",
                    sentiment: 8.5,
                    sentimentLabel: "Helpful"
                },
                {
                    timestamp: "00:02:20",
                    speaker: "lead",
                    name: "Sarah Chen",
                    text: "Actually, yes! My friend Lisa just found out she's pregnant. I already told her about you guys.",
                    sentiment: 9.0,
                    sentimentLabel: "Eager"
                },
                {
                    timestamp: "00:02:30",
                    speaker: "ai",
                    name: "Emma",
                    text: "Amazing! If Lisa is interested, you can refer her through the app and you'll both get a $100 premium credit. Would you like me to explain how the referral program works?",
                    sentiment: 8.5,
                    sentimentLabel: "Encouraging"
                },
                {
                    timestamp: "00:02:45",
                    speaker: "lead",
                    name: "Sarah Chen",
                    text: "Yes please! That would be great.",
                    sentiment: 8.5,
                    sentimentLabel: "Interested"
                }
            ],
            npsScore: 9,
            npsCategory: "Promoter",
            aiAnalysis: "Excellent 30-day review. NPS 9/10 (Promoter status achieved). Customer very satisfied with claims process and service. Identified product improvement opportunity (pregnancy tracker). Referral opportunity identified - Lisa Wong (expecting mother). Auto-triggered referral program email."
        },

        // TP-025: Quarterly Newsletter (Jan 2, 2026)
        {
            id: "TP-025",
            number: 25,
            type: "email",
            timestamp: "2026-01-02T09:00:00+08:00",
            status: "sent",
            agent: {
                type: "ai",
                name: "System",
                avatar: "📧"
            },
            campaign: "Quarterly Engagement",
            sentiment: 7.5,
            sentimentLabel: "Informative",
            summary: "Q1 2026 customer newsletter - Industry news and health tips",
            emailContent: {
                subject: "AIA Quarterly Update: New Year, New Benefits! 🎊",
                from: "AIA Newsletter <newsletter@aia.com>",
                to: "Sarah Chen <sarah.chen@email.com>",
                body: `Happy New Year, Sarah! 🎉

Welcome to 2026! We hope you had a wonderful holiday season.

**What's New at AIA:**

🎁 **New Parent Gift Program**
All new parents receive a welcome gift basket when baby arrives! (You qualify!)

📱 **App Update**
We listened to your feedback! The new app now includes:
- Pregnancy milestone tracker
- Prenatal appointment reminders
- Coverage FAQs specific to your trimester

💰 **Enhanced Coverage**
Starting Feb 1, maternity coverage increased from $25K → $30K at no extra cost!

**Health Tips for Expecting Mothers:**

✓ Trimester 3: Start packing your hospital bag
✓ Practice breathing exercises for labor
✓ Attend prenatal classes (covered by AIA!)
✓ Get your birth plan ready

**Customer Success Story:**

"AIA covered my entire delivery - $19,500! I paid $0 out of pocket. The direct billing made check-in stress-free, and I could focus on meeting my baby!" - Michelle T., New Mom

**Reminder:** Add your baby to your policy within 30 days of birth for seamless coverage from day 1!

Questions? Chat with Emma 24/7 or call 1800-248-8000.

Your AIA Family`,
                attachments: ["Q1_2026_Newsletter.pdf"]
            }
        },

        // TP-026: Baby Born Congratulations Email (Feb 14, 2026)
        {
            id: "TP-026",
            number: 26,
            type: "email",
            timestamp: "2026-02-14T10:00:00+08:00",
            status: "sent",
            agent: {
                type: "ai",
                name: "System",
                avatar: "🍼"
            },
            campaign: "Life Event - Baby Born",
            sentiment: 10.0,
            sentimentLabel: "Celebratory",
            summary: "Automated congratulations email triggered by maternity claim filing - baby born!",
            emailContent: {
                subject: "Welcome to the world, Baby Emma! 🎉👶",
                from: "AIA Family <family@aia.com>",
                to: "Sarah Chen <sarah.chen@email.com>",
                body: `Dear Sarah & Family,

CONGRATULATIONS on the arrival of Baby Emma! 🎉👶💕

We saw your delivery claim come through and wanted to be among the first to celebrate this incredible milestone with you!

**Your Delivery Claim:**
✓ Claim Amount: $18,500
✓ Status: APPROVED ✅
✓ Processing Time: 24 hours
✓ Payment: Sent to Thomson Medical (direct billing)

You paid $0 out of pocket! Your coverage worked exactly as it should.

**Next Steps - Adding Baby Emma:**

1. **Activate Newborn Coverage (within 30 days):**
   - Open AIA app → My Policies → Add Family Member
   - Enter Baby Emma's birth details
   - Coverage starts from day 1 (no waiting period!)
   - No health screening required

2. **What Baby Emma is Covered For:**
   ✓ Newborn health screenings
   ✓ Vaccinations (full schedule)
   ✓ Any congenital conditions
   ✓ Hospital visits for any reason
   ✓ Up to $50,000 coverage

3. **Your Welcome Gift:**
   We're sending a baby gift basket to your home! (Delivery in 3-5 days)
   - Organic baby care products
   - AIA baby blanket
   - First year milestone cards
   - Parenting guide

**Important Reminders:**

📱 Update baby's details in app within 30 days
📋 Keep all vaccination records
🏥 First pediatrician visit is fully covered

**We're Here to Help:**
- Emma (AI): Available 24/7 in app
- Rachel Tan (Your Specialist): rachel.tan@aia.com
- New Parent Hotline: 1800-NEWBORN

Enjoy these precious first moments with Baby Emma. We're honored to protect your growing family!

With love and congratulations,
Your AIA Family ❤️

P.S. When Emma turns 1, we'll reach out about education savings plans. But for now - just enjoy every moment!`,
                attachments: ["Newborn_Coverage_Guide.pdf", "Vaccination_Schedule.pdf", "Add_Baby_Instructions.pdf"]
            }
        },

        // TP-027: Post-Birth Congratulations Call (Feb 16, 2026)
        {
            id: "TP-027",
            number: 27,
            type: "voice_call",
            timestamp: "2026-02-16T11:00:00+08:00",
            duration: 615, // 10 min 15 sec
            status: "completed",
            agent: {
                type: "ai",
                name: "Emma",
                avatar: "🤖"
            },
            campaign: "Life Event Follow-up",
            sentiment: 9.8,
            sentimentLabel: "Extremely Positive",
            engagement: "excellent",
            outcome: "upsell_opportunity_identified",
            summary: "Emma called to congratulate Sarah, confirm newborn coverage, and introduce education planning. Sarah expressed strong interest.",
            transcript: [
                {
                    timestamp: "00:00:05",
                    speaker: "ai",
                    name: "Emma",
                    text: "Hi Sarah! It's Emma from AIA. First of all - huge congratulations on Baby Emma! How are you both doing?",
                    sentiment: 10.0,
                    sentimentLabel: "Celebratory"
                },
                {
                    timestamp: "00:00:18",
                    speaker: "lead",
                    name: "Sarah Chen",
                    text: "Thank you so much, Emma! We're doing great. Exhausted, but so happy!",
                    sentiment: 9.5,
                    sentimentLabel: "Joyful"
                },
                {
                    timestamp: "00:00:28",
                    speaker: "ai",
                    name: "Emma",
                    text: "I can only imagine! I wanted to let you know that your delivery claim has been fully processed - $18,500 paid directly to Thomson Medical. Everything went smoothly on our end.",
                    sentiment: 9.0,
                    sentimentLabel: "Informative"
                },
                {
                    timestamp: "00:00:45",
                    speaker: "lead",
                    name: "Sarah Chen",
                    text: "Yes! I was so relieved I didn't have to worry about the bill. It was such a smooth process.",
                    sentiment: 9.5,
                    sentimentLabel: "Grateful"
                },
                {
                    timestamp: "00:00:55",
                    speaker: "ai",
                    name: "Emma",
                    text: "That's exactly what we want to hear! Now, I know you're busy with Baby Emma, but I wanted to remind you to add her to your policy within 30 days through the app. It takes about 5 minutes, and her coverage starts immediately.",
                    sentiment: 8.5,
                    sentimentLabel: "Helpful"
                },
                {
                    timestamp: "00:01:15",
                    speaker: "lead",
                    name: "Sarah Chen",
                    text: "Yes, I got the email about that. I'll do it this week.",
                    sentiment: 8.0,
                    sentimentLabel: "Committed"
                },
                {
                    timestamp: "00:01:22",
                    speaker: "ai",
                    name: "Emma",
                    text: "Perfect! And Sarah, I know this might seem early, but many new parents start thinking about their child's future education costs. Have you and your husband thought about education planning yet?",
                    sentiment: 7.5,
                    sentimentLabel: "Exploratory"
                },
                {
                    timestamp: "00:01:40",
                    speaker: "lead",
                    name: "Sarah Chen",
                    text: "Actually, yes! My husband mentioned it just yesterday. University fees are so expensive now.",
                    sentiment: 8.5,
                    sentimentLabel: "Interested"
                },
                {
                    timestamp: "00:01:52",
                    speaker: "ai",
                    name: "Emma",
                    text: "They really are! By the time Emma goes to university, it could cost $150,000 or more. AIA has education endowment plans that let you save while protecting her future. Would you be interested in learning more about that?",
                    sentiment: 8.0,
                    sentimentLabel: "Informative"
                },
                {
                    timestamp: "00:02:15",
                    speaker: "lead",
                    name: "Sarah Chen",
                    text: "Yes, definitely. Not right now - I'm barely sleeping! But maybe in a few weeks?",
                    sentiment: 8.5,
                    sentimentLabel: "Receptive"
                },
                {
                    timestamp: "00:02:28",
                    speaker: "ai",
                    name: "Emma",
                    text: "Of course! Enjoy these precious newborn days. I'll have Rachel reach out in about 2-3 weeks to set up a quick consultation when you're ready. No pressure at all - this is just planning for the future.",
                    sentiment: 9.0,
                    sentimentLabel: "Understanding"
                },
                {
                    timestamp: "00:02:50",
                    speaker: "lead",
                    name: "Sarah Chen",
                    text: "That sounds perfect. Thank you, Emma!",
                    sentiment: 9.0,
                    sentimentLabel: "Appreciative"
                }
            ],
            aiAnalysis: "🎯 UPSELL OPPORTUNITY IDENTIFIED: Sarah showed strong interest in education planning for Baby Emma. Auto-enrolled in 'Child Education Planning' campaign (45-day nurture). Rachel Tan to schedule consultation in 2-3 weeks. Expected additional policy value: $30,000-$50,000 LTV."
        },

        // TP-028: Education Planning Intro Email (Mar 1, 2026)
        {
            id: "TP-028",
            number: 28,
            type: "email",
            timestamp: "2026-03-01T09:00:00+08:00",
            status: "sent",
            agent: {
                type: "ai",
                name: "System",
                avatar: "📧"
            },
            campaign: "Child Education Planning",
            sentiment: 8.0,
            sentimentLabel: "Informative",
            summary: "Education planning campaign initiated - introducing education savings options",
            emailContent: {
                subject: "Planning for Baby Emma's Future 🎓",
                from: "Rachel Tan <rachel.tan@aia.com>",
                to: "Sarah Chen <sarah.chen@email.com>",
                body: `Hi Sarah,

Hope you're settling into the wonderful chaos of new parenthood! Baby Emma is so lucky to have you.

As promised, I wanted to reach out about education planning. I know Emma is only a few weeks old, but starting early makes all the difference!

**The Reality Check:**

By the time Emma turns 18 (in 2044):
- Local university: ~$150,000
- Overseas university: $300,000+
- Private education (K-12): Additional $200,000

**The Good News:**

If you start saving now, you only need $150/month to build a $150,000 education fund by the time Emma is 18!

**How It Works:**

AIA Education Endowment Plan:
- Save $150/month for 18 years
- Guaranteed returns + bonuses
- Money available when Emma starts university
- Built-in protection: If anything happens to you, premiums are waived AND Emma still gets the full amount

**Real Example:**

Pay in: $150 x 12 months x 18 years = $32,400
Get back: $150,000+ (guaranteed!)

That's your $32K turning into $150K+ for Emma's education.

**Why Start Now?**

✓ Lower monthly cost (time is on your side!)
✓ Compounding returns over 18 years
✓ Protection built-in
✓ Locked-in rates (no price increases)
✓ Tax benefits

**Next Step:**

I'd love to show you a personalized illustration based on Emma's birth date. Can we schedule a quick 20-minute call next week? I'll walk you through the numbers and answer all your questions.

Just reply with a few time options that work for you!

Warmly,
Rachel Tan
Senior Family Protection Specialist
📞 +65 9234 5678`,
                attachments: ["Education_Planning_Guide.pdf", "Cost_of_Education_2044.pdf"]
            }
        },

        // TP-029: Education Planning Specialist Meeting (Mar 5, 2026)
        {
            id: "TP-029",
            number: 29,
            type: "specialist_meeting",
            timestamp: "2026-03-05T14:00:00+08:00",
            duration: 2700, // 45 minutes
            status: "completed",
            agent: {
                type: "human",
                name: "Rachel Tan",
                title: "Senior Family Protection Specialist",
                avatar: "👤"
            },
            campaign: "Education Planning Consultation",
            sentiment: 8.9,
            sentimentLabel: "Very Positive",
            intent: "high",
            engagement: "excellent",
            outcome: "quote_provided",
            conversionProbChange: +15,
            summary: "Rachel conducted comprehensive education planning consultation. Presented Education Endowment Plan + Child Protection Rider ($150/month). Sarah very receptive, considering options.",
            meetingNotes: [
                {
                    time: "14:00",
                    speaker: "Rachel Tan",
                    note: "Congratulated Sarah on Baby Emma, asked about first month as parents"
                },
                {
                    time: "14:05",
                    speaker: "Sarah Chen",
                    note: "Shared that parenting is wonderful but expensive already! Interested in long-term planning"
                },
                {
                    time: "14:10",
                    speaker: "Rachel Tan",
                    note: "Presented education cost projections: $150K local, $300K+ overseas by 2044"
                },
                {
                    time: "14:18",
                    speaker: "Sarah Chen",
                    note: "Shocked by projected costs, realizes starting early is crucial"
                },
                {
                    time: "14:22",
                    speaker: "Rachel Tan",
                    note: "Showed personalized illustration: $150/month → $150K+ in 18 years"
                },
                {
                    time: "14:30",
                    speaker: "Sarah Chen",
                    note: "Asked about flexibility if finances change, withdrawal options"
                },
                {
                    time: "14:35",
                    speaker: "Rachel Tan",
                    note: "Explained premium holiday options, partial withdrawals for emergencies, surrender values"
                },
                {
                    time: "14:40",
                    speaker: "Sarah Chen",
                    note: "Very interested, wants to discuss with husband given it's additional $150/month"
                }
            ],
            documentsProvided: ["Education Endowment Illustration", "Child Protection Rider Details", "Payment Flexibility Guide"],
            nextSteps: "Sarah to discuss with husband, decision within 7 days"
        }
    ],

    // Next Actions
    nextActions: [
        {
            action: "Book specialist consultation with Rachel Tan",
            priority: "high",
            deadline: "2025-10-17T19:00:00+08:00",
            status: "scheduled",
            assignedTo: "Rachel Tan"
        },
        {
            action: "Send competitor comparison analysis",
            priority: "high",
            deadline: "2025-10-16T20:00:00+08:00",
            status: "pending",
            assignedTo: "AI System"
        },
        {
            action: "Activate limited-time new parent bundle offer",
            priority: "medium",
            deadline: "2025-10-17T00:00:00+08:00",
            status: "pending",
            assignedTo: "Campaign System"
        }
    ]
};

// ============= Michael Tan - Young Professional Lead Profile =============
const michaelTan = {
    id: "LC-2025-8473",
    firstName: "Michael",
    lastName: "Tan",
    fullName: "Michael Tan",
    email: "michael.tan@tiktok.com",
    phone: "+65 9234 5678",
    age: 28,
    maritalStatus: "Single",
    location: "Singapore, Central",
    avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%230066CC' width='100' height='100'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='40' fill='white'%3EMT%3C/text%3E%3C/svg%3E",

    // Lead Intelligence
    leadScore: 82,
    conversionProbability: 68,
    estimatedLTV: 52000,
    stage: "Engaged",
    temperature: "warm",
    daysInPipeline: 14,
    engagementRate: 88,

    // Trigger Events
    triggerEvents: [
        {
            type: "career_milestone",
            title: "Downloaded Young Professionals Guide",
            detected: "2025-10-01T23:45:00+08:00",
            source: "AIA Career Portal - Downloaded '25-30 Insurance Planning Checklist'",
            details: "Came from LinkedIn ad, filled form with opt-in consent",
            intentWindow: "active",
            totalDays: 30,
            daysElapsed: 14,
            daysRemaining: 16,
            priority: "high"
        }
    ],

    // Current Coverage
    currentCoverage: [
        {
            type: "Company Health Insurance",
            premium: 0,
            coverage: 30000,
            provider: "TikTok Corporate Plan",
            status: "active",
            limitations: "Basic hospitalization only, ends if leaves company"
        }
    ],

    // Coverage Gaps
    coverageGaps: [
        {
            type: "critical_illness",
            title: "No Critical Illness Coverage",
            severity: "critical",
            estimatedRisk: 500000,
            description: "Motivated by friend's cancer diagnosis at 27"
        },
        {
            type: "life_insurance",
            title: "No Life Insurance",
            severity: "moderate",
            estimatedRisk: 300000,
            description: "No dependents yet, but planning ahead"
        }
    ],

    // Recommended Products
    recommendedProducts: [
        {
            id: "PROD-005",
            name: "Critical Illness Protection ($500K)",
            premium: 125,
            closeProbability: 0.78,
            benefits: [
                "37 critical illnesses covered",
                "Early stage cancer coverage",
                "Lump sum payout on diagnosis",
                "Premium waiver for total disability"
            ]
        },
        {
            id: "PROD-006",
            name: "Life Insurance ($300K)",
            premium: 60,
            closeProbability: 0.65,
            benefits: [
                "$300K death benefit",
                "Accidental death double payout",
                "Terminal illness rider",
                "Portable (not tied to employer)"
            ]
        }
    ],

    // Behavioral Insights
    behavioralInsights: {
        communicationStyle: "Tech-savvy, prefers WhatsApp and mobile",
        decisionMaking: "Data-driven, needs to understand details",
        objections: ["Too young for insurance?", "Premium seems high", "What if I switch jobs?"],
        painPoints: ["Friend's health scare made him anxious", "Confused by insurance jargon"],
        positiveSignals: ["Asks detailed questions", "Responsive on weekends", "Downloaded guide at 11:45 PM"],
        engagementPattern: "Late nights (10-11 PM) and weekends",
        preferredChannel: "WhatsApp > Voice calls > Email",
        competitorsMentioned: ["Prudential (researching)"],
        emotionalState: "Anxious about health risks, motivated to act",
        trustLevel: "moderate-high"
    },

    // AI Recommended Approach
    aiStrategy: {
        tone: "Casual, tech-savvy, data-driven",
        focus: "Lock in low premiums while young and healthy",
        positioning: "Smart financial planning for career growth",
        urgency: "Premiums increase with age",
        nextBestActions: [
            "Send WhatsApp quote breakdown",
            "Connect with David Lim (Young Professionals Specialist)",
            "Show app demo for claims process",
            "Share customer reviews from tech industry"
        ]
    },

    // Touchpoint History
    touchpoints: [
        {
            id: "TP-MT-005",
            number: 5,
            type: "voice_call",
            timestamp: "2025-10-09T19:30:00+08:00",
            duration: 720,
            status: "completed",
            agent: {
                type: "ai",
                name: "Emma",
                avatar: "🤖"
            },
            campaign: "Young Professional Nurture - Call #3",
            sentiment: 7.8,
            sentimentLabel: "Positive",
            intent: "high",
            engagement: "strong",
            outcome: "handoff_scheduled",
            conversionProbChange: +12,
            summary: "Overcame price objection, scheduled specialist call",
            transcript: [
                {
                    timestamp: "00:00:03",
                    speaker: "ai",
                    name: "Emma",
                    text: "Hey Michael, it's Emma from AIA. How's it going?",
                    sentiment: 7.0,
                    sentimentLabel: "Friendly"
                },
                {
                    timestamp: "00:00:07",
                    speaker: "lead",
                    name: "Michael Tan",
                    text: "Hi Emma. Yeah, doing well. Just finished work.",
                    sentiment: 6.5,
                    sentimentLabel: "Neutral"
                },
                {
                    timestamp: "00:00:11",
                    speaker: "ai",
                    name: "Emma",
                    text: "Perfect timing then! I saw you checked out the quote I sent you - $185 a month for critical illness and life insurance. What are your thoughts?",
                    sentiment: 7.2,
                    sentimentLabel: "Direct"
                },
                {
                    timestamp: "00:00:22",
                    speaker: "lead",
                    name: "Michael Tan",
                    text: "Honestly? It seems a bit high for my age. I'm only 28.",
                    sentiment: 5.8,
                    sentimentLabel: "Hesitant"
                },
                {
                    timestamp: "00:00:28",
                    speaker: "ai",
                    name: "Emma",
                    text: "I totally get that. Let me break it down differently - that's $6 a day. Less than your lunch budget, right? And here's the thing - at 28, you're actually getting the BEST rates. It only gets more expensive as you get older.",
                    sentiment: 7.8,
                    sentimentLabel: "Persuasive"
                },
                {
                    timestamp: "00:00:45",
                    speaker: "lead",
                    name: "Michael Tan",
                    text: "Hmm, I never thought about it that way. $6 a day doesn't sound as bad.",
                    sentiment: 7.0,
                    sentimentLabel: "Reconsidering"
                },
                {
                    timestamp: "00:00:52",
                    speaker: "ai",
                    name: "Emma",
                    text: "Exactly! Plus, you mentioned your friend who got diagnosed with cancer at 27. Think about it - if something like that happened to you without coverage, you'd be looking at potentially hundreds of thousands in medical bills. $6 a day is nothing compared to that risk.",
                    sentiment: 7.5,
                    sentimentLabel: "Empathetic"
                },
                {
                    timestamp: "00:01:08",
                    speaker: "lead",
                    name: "Michael Tan",
                    text: "Yeah... seeing what he went through really shook me up. The medical bills were insane.",
                    sentiment: 6.8,
                    sentimentLabel: "Concerned"
                },
                {
                    timestamp: "00:01:15",
                    speaker: "ai",
                    name: "Emma",
                    text: "I can imagine. That's exactly why you're being smart by looking into this now. Most people wait until it's too late, or until they already have health issues and can't get coverage. You're 28, healthy, and can lock in these low rates for life.",
                    sentiment: 8.0,
                    sentimentLabel: "Supportive"
                },
                {
                    timestamp: "00:01:32",
                    speaker: "lead",
                    name: "Michael Tan",
                    text: "Okay, that makes sense. But I still want to understand exactly what I'm getting. Can you explain it in simple terms?",
                    sentiment: 7.5,
                    sentimentLabel: "Interested"
                },
                {
                    timestamp: "00:01:42",
                    speaker: "ai",
                    name: "Emma",
                    text: "Absolutely! So you're getting two things: First, critical illness coverage for $500K. If you're diagnosed with cancer, heart attack, stroke, or any of 37 major illnesses, you get a lump sum payment of half a million. Use it however you want - medical bills, living expenses, whatever. Second, life insurance for $300K. If something happens to you, your family gets that money.",
                    sentiment: 7.8,
                    sentimentLabel: "Educational"
                },
                {
                    timestamp: "00:02:10",
                    speaker: "lead",
                    name: "Michael Tan",
                    text: "Got it. And this is portable right? Like if I switch jobs, I don't lose it?",
                    sentiment: 7.2,
                    sentimentLabel: "Clarifying"
                },
                {
                    timestamp: "00:02:17",
                    speaker: "ai",
                    name: "Emma",
                    text: "Yes! 100% portable. It's YOUR policy, not your employer's. You could quit tomorrow and start your own business - this coverage stays with you. That's actually a huge advantage over company insurance which disappears the day you leave.",
                    sentiment: 8.2,
                    sentimentLabel: "Reassuring"
                },
                {
                    timestamp: "00:02:32",
                    speaker: "lead",
                    name: "Michael Tan",
                    text: "Okay that's really important to me actually. I might move to a startup next year.",
                    sentiment: 7.8,
                    sentimentLabel: "Positive"
                },
                {
                    timestamp: "00:02:38",
                    speaker: "ai",
                    name: "Emma",
                    text: "Perfect! Then you definitely need your own coverage. Look, I want you to feel 100% confident about this. How about I connect you with David Lim, our critical illness specialist? He works specifically with young professionals in tech. He can walk you through everything in detail, show you the app, explain the claim process - all that good stuff. Sound good?",
                    sentiment: 8.0,
                    sentimentLabel: "Solution-focused"
                },
                {
                    timestamp: "00:02:58",
                    speaker: "lead",
                    name: "Michael Tan",
                    text: "Yeah, that would be helpful. But I'm super busy at work. Can we do it after 7 PM?",
                    sentiment: 7.5,
                    sentimentLabel: "Agreeable"
                },
                {
                    timestamp: "00:03:05",
                    speaker: "ai",
                    name: "Emma",
                    text: "Of course! David is flexible with timing. How about tomorrow at 7 PM? I'll have him give you a call, and you can ask him anything. He's helped over 50 young professionals this quarter alone, so he really gets your situation.",
                    sentiment: 8.0,
                    sentimentLabel: "Accommodating"
                },
                {
                    timestamp: "00:03:20",
                    speaker: "lead",
                    name: "Michael Tan",
                    text: "Tomorrow at 7 works. Sounds good.",
                    sentiment: 8.0,
                    sentimentLabel: "Committed"
                },
                {
                    timestamp: "00:03:24",
                    speaker: "ai",
                    name: "Emma",
                    text: "Awesome Michael! You'll get a calendar invite in the next few minutes with David's direct number too, just in case. And hey - smart move looking into this now. Your 28-year-old self is way smarter than most people!",
                    sentiment: 8.5,
                    sentimentLabel: "Encouraging"
                },
                {
                    timestamp: "00:03:38",
                    speaker: "lead",
                    name: "Michael Tan",
                    text: "Haha thanks Emma. Talk soon.",
                    sentiment: 8.2,
                    sentimentLabel: "Positive"
                },
                {
                    timestamp: "00:03:41",
                    speaker: "ai",
                    name: "Emma",
                    text: "You got it! Have a great evening Michael!",
                    sentiment: 8.0,
                    sentimentLabel: "Warm"
                }
            ],
            keyMoments: [
                { time: "00:00:28", description: "Price objection raised - $185 seems high" },
                { time: "00:00:45", description: "$6/day reframe worked - objection softened" },
                { time: "00:01:08", description: "Friend's cancer story reinforced urgency" },
                { time: "00:02:17", description: "Portability concern addressed successfully" },
                { time: "00:03:20", description: "Specialist appointment confirmed - major win" }
            ],
            aiActions: [
                "Appointment scheduled with David Lim for Oct 10, 7 PM",
                "Calendar invite sent to Michael",
                "Specialist briefing auto-generated for David",
                "Lead status updated to 'Sales-Ready'"
            ],
            recordingUrl: "/assets/audio/michael-call-5.mp3"
        },
        {
            id: "TP-MT-006",
            number: 6,
            type: "whatsapp",
            timestamp: "2025-10-13T12:00:00+08:00",
            status: "completed",
            agent: {
                type: "ai",
                name: "Emma",
                avatar: "🤖"
            },
            campaign: "Young Professional Nurture",
            sentiment: 8.5,
            sentimentLabel: "Positive",
            engagement: "high",
            outcome: "conversion",
            conversionProbChange: +15,
            summary: "Michael ready to sign up - application sent",
            messages: [
                {
                    from: "ai",
                    time: "12:00",
                    text: "Hi Michael! Hope you had a great weekend. Any questions from your call with David?"
                },
                {
                    from: "lead",
                    time: "12:18",
                    text: "Nope, let's do it. How do I sign up?"
                },
                {
                    from: "ai",
                    time: "12:19",
                    text: "Awesome! 🎉 I'll have David send the application link. Takes 5 min on mobile. You'll get Critical Illness $500K + Life $300K for $185/month."
                },
                {
                    from: "lead",
                    time: "12:20",
                    text: "Perfect. Sending it now?"
                },
                {
                    from: "ai",
                    time: "12:20",
                    text: "Yes! Check your WhatsApp in 2 minutes. David will send the secure link. Thanks for trusting us Michael! 😊"
                }
            ]
        }
    ],

    // Next Actions
    nextActions: [
        {
            action: "Send mobile application link",
            priority: "critical",
            deadline: "2025-10-13T12:30:00+08:00",
            status: "completed",
            assignedTo: "David Lim"
        },
        {
            action: "Follow up on application completion",
            priority: "high",
            deadline: "2025-10-13T18:00:00+08:00",
            status: "pending",
            assignedTo: "AI System"
        }
    ]
};

// ============= Linda Wong - Policy Anniversary Upsell Profile =============
const lindaWong = {
    id: "LC-2025-8474",
    firstName: "Linda",
    lastName: "Wong",
    fullName: "Linda Wong",
    email: "linda.wong@company.com.sg",
    phone: "+65 9345 6789",
    age: 45,
    maritalStatus: "Married",
    children: 2,
    location: "Singapore, East Coast",
    avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%2300C853' width='100' height='100'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='40' fill='white'%3ELW%3C/text%3E%3C/svg%3E",

    // Lead Intelligence
    leadScore: 91,
    conversionProbability: 82,
    estimatedLTV: 55000,
    stage: "Upsell - Ready to Close",
    temperature: "hot",
    daysInPipeline: 20,
    engagementRate: 94,
    customerType: "existing", // Existing customer upsell

    // Trigger Events
    triggerEvents: [
        {
            type: "policy_anniversary",
            title: "10-Year Policy Anniversary",
            detected: "2025-06-15T00:00:00+08:00",
            source: "CRM Alert - Policy Anniversary Automated Review",
            details: "10-year anniversary, coverage outdated for current family needs",
            intentWindow: "active",
            totalDays: 60,
            daysElapsed: 20,
            daysRemaining: 40,
            priority: "high"
        },
        {
            type: "life_stage_change",
            title: "Children Entering Teenage Years",
            detected: "2025-06-15T00:00:00+08:00",
            source: "CRM Data Analysis - Kids now 14 and 11",
            details: "Education costs rising, coverage gap identified",
            priority: "high"
        }
    ],

    // Current Coverage
    currentCoverage: [
        {
            type: "Life Insurance",
            premium: 95,
            coverage: 200000,
            policyNumber: "AIA-2015-224567",
            status: "active",
            startDate: "2015-06-15",
            renewalDate: "2026-06-15",
            yearsWithAIA: 10
        }
    ],

    // Coverage Gaps
    coverageGaps: [
        {
            type: "education_funding",
            title: "Insufficient Education Coverage",
            severity: "critical",
            estimatedRisk: 300000,
            description: "$150K per child for university - current $200K won't cover both"
        },
        {
            type: "life_insurance_gap",
            title: "Coverage Outdated for Current Needs",
            severity: "high",
            estimatedRisk: 400000,
            description: "Bought 10 years ago when kids were babies, needs $600K+ now"
        },
        {
            type: "critical_illness",
            title: "No Critical Illness Rider",
            severity: "moderate",
            estimatedRisk: 100000,
            description: "Age 45, higher risk - should add CI coverage"
        }
    ],

    // Recommended Products
    recommendedProducts: [
        {
            id: "PROD-007",
            name: "Life Insurance Increase ($200K → $400K)",
            premium: 150,
            closeProbability: 0.88,
            benefits: [
                "Doubled coverage to $400K total",
                "Covers both children's university fees",
                "Family fully protected",
                "Existing policy retained"
            ]
        },
        {
            id: "PROD-008",
            name: "Education Savings Plan",
            premium: 70,
            closeProbability: 0.82,
            benefits: [
                "Guaranteed $150K per child at age 18",
                "Covers university fees",
                "Waiver if parent passes",
                "Tax benefits"
            ]
        }
    ],

    // Behavioral Insights
    behavioralInsights: {
        communicationStyle: "Professional, values thoroughness",
        decisionMaking: "Joint with husband, budget-conscious",
        objections: ["Premium increase concerns", "Can we phase it?", "Need to discuss with husband"],
        painPoints: ["University fees anxiety", "Inflation worries", "Wants flexibility"],
        positiveSignals: ["10-year loyal customer", "Responds quickly", "Forwards emails to husband"],
        engagementPattern: "Evenings 7-9 PM, weekends mornings",
        preferredChannel: "Voice calls > Email > SMS",
        trustLevel: "very high (10-year customer)",
        customerSentiment: "Loyal, appreciates personalized service"
    },

    // AI Recommended Approach
    aiStrategy: {
        tone: "Warm, appreciative of loyalty, consultative",
        focus: "Children's future security and education funding",
        positioning: "Partner in family's journey, not just insurer",
        urgency: "Kids growing up fast, lock in rates before age 46",
        nextBestActions: [
            "Celebrate 10-year anniversary with special offer",
            "Connect with Patricia Ng (Family Specialist)",
            "Show phased approach to ease budget concerns",
            "Provide university cost projections"
        ]
    },

    // Touchpoint History
    touchpoints: [
        {
            id: "TP-LW-003",
            number: 3,
            type: "voice_call",
            timestamp: "2025-09-28T19:00:00+08:00",
            duration: 900,
            status: "completed",
            agent: {
                type: "ai",
                name: "Emma",
                avatar: "🤖"
            },
            campaign: "Policy Anniversary Review",
            sentiment: 8.6,
            sentimentLabel: "Positive",
            intent: "high",
            engagement: "strong",
            outcome: "review_scheduled",
            conversionProbChange: +14,
            summary: "Linda agreed to comprehensive review, concerns about kids' education costs identified",
            transcript: [
                {
                    timestamp: "00:00:03",
                    speaker: "ai",
                    name: "Emma",
                    text: "Hi Linda! This is Emma from AIA. Do you have a moment to chat?",
                    sentiment: 7.5,
                    sentimentLabel: "Friendly"
                },
                {
                    timestamp: "00:00:08",
                    speaker: "lead",
                    name: "Linda Wong",
                    text: "Hi Emma. Yes, I just sat down actually. What's this about?",
                    sentiment: 7.0,
                    sentimentLabel: "Receptive"
                },
                {
                    timestamp: "00:00:14",
                    speaker: "ai",
                    name: "Emma",
                    text: "Perfect timing! I'm calling because your policy with us is hitting a major milestone - 10 years this month! First of all, congratulations on being with AIA for a whole decade. That's amazing.",
                    sentiment: 8.0,
                    sentimentLabel: "Appreciative"
                },
                {
                    timestamp: "00:00:28",
                    speaker: "lead",
                    name: "Linda Wong",
                    text: "Oh wow, has it been 10 years already? Time really flies!",
                    sentiment: 7.8,
                    sentimentLabel: "Surprised"
                },
                {
                    timestamp: "00:00:34",
                    speaker: "ai",
                    name: "Emma",
                    text: "It really does! And I bet your daughters have grown up a lot in that time too. How old are they now?",
                    sentiment: 7.5,
                    sentimentLabel: "Conversational"
                },
                {
                    timestamp: "00:00:40",
                    speaker: "lead",
                    name: "Linda Wong",
                    text: "Oh my goodness, yes. They're 14 and 11 now. It feels like just yesterday they were babies when I first bought that policy.",
                    sentiment: 8.2,
                    sentimentLabel: "Nostalgic"
                },
                {
                    timestamp: "00:00:50",
                    speaker: "ai",
                    name: "Emma",
                    text: "That's exactly what I wanted to talk about. When you bought your $200,000 life insurance policy 10 years ago, your daughters were tiny. But now they're heading toward their teenage years and thinking about university soon. Have you thought about whether your current coverage still matches your family's needs?",
                    sentiment: 7.8,
                    sentimentLabel: "Consultative"
                },
                {
                    timestamp: "00:01:08",
                    speaker: "lead",
                    name: "Linda Wong",
                    text: "Actually... I haven't really thought about it. We've just been paying the premiums every month. You think it's not enough anymore?",
                    sentiment: 7.0,
                    sentimentLabel: "Concerned"
                },
                {
                    timestamp: "00:01:17",
                    speaker: "ai",
                    name: "Emma",
                    text: "Well, let me ask you this - what do you think university will cost for each of your daughters? Ballpark figure?",
                    sentiment: 7.5,
                    sentimentLabel: "Probing"
                },
                {
                    timestamp: "00:01:24",
                    speaker: "lead",
                    name: "Linda Wong",
                    text: "Oh god... probably at least $150,000 each if they go overseas. Maybe $80-100K locally. It's terrifying to think about honestly.",
                    sentiment: 6.5,
                    sentimentLabel: "Anxious"
                },
                {
                    timestamp: "00:01:35",
                    speaker: "ai",
                    name: "Emma",
                    text: "You're absolutely right to be thinking about it. So here's the thing - your current $200,000 policy wouldn't even cover one child's university fees, let alone both, plus living expenses for your family if something happened. That's the gap I wanted to bring to your attention.",
                    sentiment: 7.8,
                    sentimentLabel: "Direct"
                },
                {
                    timestamp: "00:01:52",
                    speaker: "lead",
                    name: "Linda Wong",
                    text: "Oh... I never thought about it that way. You're right. $200K wouldn't be nearly enough now.",
                    sentiment: 7.2,
                    sentimentLabel: "Realizing"
                },
                {
                    timestamp: "00:02:00",
                    speaker: "ai",
                    name: "Emma",
                    text: "Most people don't until someone points it out. The good news is, you're not starting from scratch - you already have that foundation. We just need to update it to match where your family is now. Would you be open to a complimentary coverage review? No obligation, I just want to show you what makes sense for your family today.",
                    sentiment: 8.2,
                    sentimentLabel: "Helpful"
                },
                {
                    timestamp: "00:02:20",
                    speaker: "lead",
                    name: "Linda Wong",
                    text: "Yes, actually. I think I need to see this. My husband and I have been talking about the kids' education costs and it's been stressing us out.",
                    sentiment: 7.8,
                    sentimentLabel: "Interested"
                },
                {
                    timestamp: "00:02:30",
                    speaker: "ai",
                    name: "Emma",
                    text: "I totally understand. Education planning is one of the biggest stresses for parents. Here's what I'd like to do - I want to send you a comprehensive family protection review that shows your current coverage versus what's recommended based on your daughters' ages and future education needs. You can review it with your husband, and then we can set up a call to discuss. Sound good?",
                    sentiment: 8.0,
                    sentimentLabel: "Organized"
                },
                {
                    timestamp: "00:02:50",
                    speaker: "lead",
                    name: "Linda Wong",
                    text: "Yes, please do that. I definitely want to discuss it with my husband first before making any decisions.",
                    sentiment: 8.0,
                    sentimentLabel: "Agreeable"
                },
                {
                    timestamp: "00:02:58",
                    speaker: "ai",
                    name: "Emma",
                    text: "Of course! That's exactly the right approach. This is a family decision. I'll send that review to your email tonight, and it'll have some clear visuals showing the gap. Take your time reviewing it together, and I'll follow up in about 5 days to answer any questions. How does that sound?",
                    sentiment: 8.4,
                    sentimentLabel: "Respectful"
                },
                {
                    timestamp: "00:03:15",
                    speaker: "lead",
                    name: "Linda Wong",
                    text: "That sounds perfect. Thank you Emma. This is actually really helpful timing.",
                    sentiment: 8.8,
                    sentimentLabel: "Grateful"
                },
                {
                    timestamp: "00:03:22",
                    speaker: "ai",
                    name: "Emma",
                    text: "You're so welcome Linda. And thank you for being such a loyal customer for 10 years. We really appreciate it. I'll get that review sent over tonight, and talk to you soon!",
                    sentiment: 8.6,
                    sentimentLabel: "Warm"
                },
                {
                    timestamp: "00:03:34",
                    speaker: "lead",
                    name: "Linda Wong",
                    text: "Thanks Emma! Have a good evening.",
                    sentiment: 8.5,
                    sentimentLabel: "Positive"
                },
                {
                    timestamp: "00:03:37",
                    speaker: "ai",
                    name: "Emma",
                    text: "You too Linda! Talk soon!",
                    sentiment: 8.5,
                    sentimentLabel: "Friendly"
                }
            ],
            keyMoments: [
                { time: "00:00:40", description: "Linda mentions daughters are 14 and 11 now" },
                { time: "00:01:24", description: "Linda reveals education cost anxiety - $150K each" },
                { time: "00:01:52", description: "Realization moment - $200K won't be enough" },
                { time: "00:02:20", description: "Linda stressed about education costs - high engagement" },
                { time: "00:02:50", description: "Agreement to review - wants to discuss with husband" }
            ],
            aiActions: [
                "Family protection review generated and emailed",
                "Visual gap analysis included (current vs recommended)",
                "Follow-up scheduled for 5 days",
                "Lead status updated to 'Review Pending'",
                "Husband involvement noted for future calls"
            ],
            recordingUrl: "/assets/audio/linda-call-3.mp3"
        },
        {
            id: "TP-LW-006",
            number: 6,
            type: "voice_call",
            timestamp: "2025-10-05T19:00:00+08:00",
            duration: 720,
            status: "completed",
            agent: {
                type: "human",
                name: "Patricia Ng",
                avatar: "👩"
            },
            campaign: "Policy Anniversary Upsell",
            sentiment: 9.1,
            sentimentLabel: "Very Positive",
            engagement: "very high",
            outcome: "decision_to_proceed",
            conversionProbChange: +18,
            summary: "Linda and husband decided to proceed with Phase 1 upsell",
            keyMoments: [
                { time: "00:02:15", description: "Linda mentions university cost anxiety" },
                { time: "00:05:30", description: "Patricia shares personal story (builds trust)" },
                { time: "00:08:45", description: "Linda asks about phased approach" },
                { time: "00:11:20", description: "Agreement to proceed with Phase 1" }
            ],
            notes: "Linda very receptive. Husband on call too (joint decision). Agreed to $400K life + education savings. Will add CI next year (Phase 2)."
        }
    ],

    // Next Actions
    nextActions: [
        {
            action: "Process policy upgrade to $400K life coverage",
            priority: "critical",
            deadline: "2025-10-08T17:00:00+08:00",
            status: "in_progress",
            assignedTo: "Patricia Ng"
        },
        {
            action: "Set up education savings plan enrollment",
            priority: "high",
            deadline: "2025-10-08T17:00:00+08:00",
            status: "pending",
            assignedTo: "Patricia Ng"
        },
        {
            action: "Schedule Phase 2 review (Critical Illness) for 2026",
            priority: "medium",
            deadline: "2026-01-01T00:00:00+08:00",
            status: "scheduled",
            assignedTo: "AI System"
        }
    ]
};

// ============= David Lim - Property Purchase Lead Profile =============
const davidLim = {
    id: "LC-2025-8475",
    firstName: "David",
    lastName: "Lim",
    fullName: "David Lim",
    email: "david.lim.architect@gmail.com",
    phone: "+65 9456 7890",
    age: 35,
    maritalStatus: "Married",
    marriedMonthsAgo: 3,
    location: "Singapore, Bukit Timah (New BTO)",
    avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23FF9800' width='100' height='100'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='40' fill='white'%3EDL%3C/text%3E%3C/svg%3E",

    // Lead Intelligence
    leadScore: 91,
    conversionProbability: 78,
    estimatedLTV: 89000,
    stage: "Comparing Quotes",
    temperature: "hot",
    daysInPipeline: 25,
    engagementRate: 89,

    // Trigger Events
    triggerEvents: [
        {
            type: "property_purchase",
            title: "New BTO Mortgage Approved",
            detected: "2025-09-20T14:30:00+08:00",
            source: "PropertyGuru Partnership - Mortgage insurance inquiry with consent",
            details: "Property value $850K, mortgage $680K, submitted inquiry form with opt-in",
            intentWindow: "active",
            totalDays: 45,
            daysElapsed: 25,
            daysRemaining: 20,
            priority: "critical"
        },
        {
            type: "newlywed",
            title: "Recently Married (3 months ago)",
            detected: "2025-09-20T14:30:00+08:00",
            source: "PropertyGuru form data",
            details: "High protection need - wife depends on income",
            priority: "high"
        }
    ],

    // Current Coverage
    currentCoverage: [
        {
            type: "None",
            premium: 0,
            coverage: 0,
            status: "uninsured",
            notes: "Freelance architect - no employer coverage"
        }
    ],

    // Coverage Gaps
    coverageGaps: [
        {
            type: "mortgage_protection",
            title: "No Mortgage Insurance",
            severity: "critical",
            estimatedRisk: 680000,
            description: "Bank requiring mortgage insurance for $680K loan"
        },
        {
            type: "life_insurance",
            title: "No Life Insurance",
            severity: "critical",
            estimatedRisk: 500000,
            description: "Wife can't manage mortgage payments alone on her income"
        },
        {
            type: "critical_illness",
            title: "No Critical Illness Coverage",
            severity: "high",
            estimatedRisk: 300000,
            description: "If disabled/sick, can't work (freelancer risk)"
        }
    ],

    // Recommended Products
    recommendedProducts: [
        {
            id: "PROD-009",
            name: "Mortgage Protection Insurance ($680K)",
            premium: 210,
            closeProbability: 0.92,
            benefits: [
                "Full $680K mortgage covered",
                "Death & terminal illness payout",
                "Meets bank requirements",
                "Decreasing premium over time"
            ]
        },
        {
            id: "PROD-010",
            name: "Life Insurance ($500K)",
            premium: 170,
            closeProbability: 0.85,
            benefits: [
                "$500K family protection",
                "Wife can maintain lifestyle",
                "Covers mortgage + living expenses",
                "Not tied to property"
            ]
        },
        {
            id: "PROD-011",
            name: "Critical Illness Rider ($300K)",
            premium: 100,
            closeProbability: 0.78,
            benefits: [
                "Lump sum if diagnosed",
                "Covers income loss",
                "37 critical illnesses",
                "Early stage coverage"
            ]
        }
    ],

    // Behavioral Insights
    behavioralInsights: {
        communicationStyle: "Detail-oriented, needs to understand fully",
        decisionMaking: "Thorough research, compares multiple options",
        objections: ["Need to compare Prudential", "Want second opinion", "What makes AIA different?"],
        painPoints: ["First time buying insurance", "Overwhelmed by options", "Bank deadline pressure"],
        positiveSignals: ["Wife actively involved", "Asks detailed questions", "Appreciates honesty"],
        engagementPattern: "Evenings 6-8 PM (after work)",
        preferredChannel: "Voice calls > Email",
        competitorsMentioned: ["Prudential (getting quote)", "Bank's in-house insurance"],
        emotionalState: "Responsible, wants best for wife and new home",
        trustLevel: "moderate (building through transparency)"
    },

    // AI Recommended Approach
    aiStrategy: {
        tone: "Educational, patient, transparent",
        focus: "Complete family and property protection",
        positioning: "Comprehensive solution vs piecemeal coverage",
        urgency: "Bank deadline approaching, lock in healthy rates",
        nextBestActions: [
            "Provide detailed comparison with Prudential",
            "Explain portability (not tied to job/property)",
            "Connect with James Tan (Property Specialist)",
            "Show scenario planning (what if disabled/sick/death)"
        ]
    },

    // Touchpoint History
    touchpoints: [
        {
            id: "TP-DL-006",
            number: 6,
            type: "voice_call",
            timestamp: "2025-10-14T19:30:00+08:00",
            duration: 420,
            status: "completed",
            agent: {
                type: "ai",
                name: "Emma",
                avatar: "🤖"
            },
            campaign: "Property Purchase Protection",
            sentiment: 8.3,
            sentimentLabel: "Positive",
            engagement: "high",
            outcome: "ready_to_proceed",
            conversionProbChange: +12,
            summary: "David finished comparing quotes, AIA came out better, ready to sign up",
            keyMoments: [
                { time: "00:01:15", description: "David confirms finished comparing with Prudential" },
                { time: "00:03:30", description: "AIA's comprehensive approach won vs piecemeal" },
                { time: "00:05:45", description: "David asks about application process" },
                { time: "00:06:50", description: "Agreement to proceed - handoff to James" }
            ],
            notes: "David very methodical. Compared every detail. AIA won on: portability, comprehensive coverage, better CI terms. Wife trusts decision. Ready to apply."
        }
    ],

    // Next Actions
    nextActions: [
        {
            action: "Send comprehensive insurance application link",
            priority: "critical",
            deadline: "2025-10-15T12:00:00+08:00",
            status: "pending",
            assignedTo: "James Tan"
        },
        {
            action: "Prepare mortgage insurance documentation for bank",
            priority: "high",
            deadline: "2025-10-16T17:00:00+08:00",
            status: "pending",
            assignedTo: "James Tan"
        }
    ]
};

// ============= Amanda Ng - Entrepreneur Lead Profile =============
const amandaNg = {
    id: "LC-2025-8476",
    firstName: "Amanda",
    lastName: "Ng",
    fullName: "Amanda Ng",
    email: "amanda.ng@sweetdelights.sg",
    phone: "+65 9567 8901",
    age: 38,
    maritalStatus: "Single",
    location: "Singapore, Tiong Bahru",
    occupation: "Former Banker → Bakery Owner (Starting)",
    avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23E91E63' width='100' height='100'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='40' fill='white'%3EAN%3C/text%3E%3C/svg%3E",

    // Lead Intelligence
    leadScore: 88,
    conversionProbability: 85,
    estimatedLTV: 71000,
    stage: "Ready to Sign",
    temperature: "hot",
    daysInPipeline: 22,
    engagementRate: 95,

    // Trigger Events
    triggerEvents: [
        {
            type: "career_change",
            title: "Leaving Corporate Job to Start Business",
            detected: "2025-09-23T09:00:00+08:00",
            source: "AIA Entrepreneurs Webinar - Registration + post-webinar survey with opt-in",
            details: "Attended live webinar, filled survey indicating bakery startup, company coverage ending in 30 days",
            intentWindow: "urgent",
            totalDays: 30,
            daysElapsed: 22,
            daysRemaining: 8,
            priority: "critical"
        },
        {
            type: "coverage_expiring",
            title: "Company Health Insurance Ending Soon",
            detected: "2025-09-23T09:00:00+08:00",
            source: "Webinar survey response",
            details: "8 days until coverage gap - high urgency",
            priority: "critical"
        }
    ],

    // Current Coverage
    currentCoverage: [
        {
            type: "Company Health Insurance",
            premium: 0,
            coverage: 100000,
            provider: "DBS Bank Corporate Plan",
            status: "ending_soon",
            endDate: "2025-10-23",
            daysRemaining: 8
        }
    ],

    // Coverage Gaps
    coverageGaps: [
        {
            type: "health_insurance",
            title: "Losing Company Health Coverage",
            severity: "critical",
            estimatedRisk: 100000,
            description: "8 days until coverage gap - must secure before Oct 23"
        },
        {
            type: "disability_insurance",
            title: "No Income Protection",
            severity: "critical",
            estimatedRisk: 200000,
            description: "As business owner, if can't work = no income at all"
        },
        {
            type: "critical_illness",
            title: "No Critical Illness Coverage",
            severity: "high",
            estimatedRisk: 150000,
            description: "Startup phase - can't afford major health crisis"
        }
    ],

    // Recommended Products
    recommendedProducts: [
        {
            id: "PROD-012",
            name: "Self-Employed Health Protection",
            premium: 145,
            closeProbability: 0.92,
            benefits: [
                "Comprehensive hospitalization coverage",
                "Outpatient & specialist visits",
                "No employer needed",
                "Portable & flexible"
            ]
        },
        {
            id: "PROD-013",
            name: "Disability Income Protection",
            premium: 90,
            closeProbability: 0.88,
            benefits: [
                "Monthly income if can't work",
                "Covers injury or illness",
                "Up to 75% income replacement",
                "Critical for self-employed"
            ]
        },
        {
            id: "PROD-014",
            name: "Critical Illness Rider ($150K)",
            premium: 50,
            closeProbability: 0.82,
            benefits: [
                "Lump sum on diagnosis",
                "37 critical illnesses",
                "Business continuity fund",
                "Early stage coverage"
            ]
        }
    ],

    // Behavioral Insights
    behavioralInsights: {
        communicationStyle: "Warm, appreciative, collaborative",
        decisionMaking: "Budget-conscious, needs flexibility",
        objections: ["Can I afford this while starting business?", "Cash flow concerns Month 1-3", "Need payment flexibility"],
        painPoints: ["First time self-insuring", "Anxious about coverage gap", "Startup financial pressure"],
        positiveSignals: ["Highly engaged", "Asks smart questions", "Grateful for help"],
        engagementPattern: "Afternoons 2-4 PM, Evenings 7-9 PM",
        preferredChannel: "Voice calls = Email > SMS",
        emotionalState: "Excited but anxious about transition",
        trustLevel: "very high (Sharon built instant connection)"
    },

    // AI Recommended Approach
    aiStrategy: {
        tone: "Supportive, flexible, entrepreneur-to-entrepreneur",
        focus: "No coverage gap + income protection for business owner",
        positioning: "Partner in entrepreneurial journey",
        urgency: "8 days to deadline, avoid coverage gap",
        nextBestActions: [
            "Offer deferred first payment (Month 2)",
            "Show tiered approach (essentials now, add later)",
            "Connect with Sharon Koh (former entrepreneur)",
            "Expedite application for Oct 23 deadline"
        ]
    },

    // Touchpoint History
    touchpoints: [
        {
            id: "TP-AN-007",
            number: 7,
            type: "voice_call",
            timestamp: "2025-10-15T14:00:00+08:00",
            duration: 540,
            status: "completed",
            agent: {
                type: "ai",
                name: "Emma",
                avatar: "🤖"
            },
            campaign: "Entrepreneur Protection Journey",
            sentiment: 9.2,
            sentimentLabel: "Very Positive",
            engagement: "very high",
            outcome: "conversion",
            conversionProbChange: +20,
            summary: "Amanda ready to proceed with flexible payment plan",
            keyMoments: [
                { time: "00:01:20", description: "Amanda expresses cash flow worry for Month 1-3" },
                { time: "00:03:45", description: "AI offers deferred first payment option" },
                { time: "00:04:10", description: "Amanda: 'You can do that?!' (relief moment)" },
                { time: "00:07:45", description: "Agreement to proceed - application to be sent" }
            ],
            notes: "Perfect example of flexible solution closing anxious buyer. Deferred payment was key. Amanda extremely grateful. High NPS expected."
        }
    ],

    // Next Actions
    nextActions: [
        {
            action: "Send expedited application link with deferred payment",
            priority: "critical",
            deadline: "2025-10-15T18:00:00+08:00",
            status: "in_progress",
            assignedTo: "Sharon Koh"
        },
        {
            action: "Ensure policy active by Oct 23 (before coverage gap)",
            priority: "critical",
            deadline: "2025-10-22T23:59:00+08:00",
            status: "pending",
            assignedTo: "Underwriting Team"
        },
        {
            action: "Schedule check-in call Month 6 for upsell (business stabilized)",
            priority: "low",
            deadline: "2026-04-15T00:00:00+08:00",
            status: "scheduled",
            assignedTo: "AI System"
        }
    ]
};

// ============= Other Active Leads =============
const activeLeads = [
    {
        id: "LC-2025-8473",
        name: "Michael Tan",
        avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%230066CC' width='100' height='100'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='40' fill='white'%3EMT%3C/text%3E%3C/svg%3E",
        leadScore: 82,
        conversionProbability: 68,
        temperature: "warm",
        stage: "Engaged",
        lastContact: "1 day ago",
        nextAction: "Follow-up call",
        estimatedLTV: 52000
    },
    {
        id: "LC-2025-8474",
        name: "Linda Wong",
        avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%2300C853' width='100' height='100'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='40' fill='white'%3ELW%3C/text%3E%3C/svg%3E",
        leadScore: 91,
        conversionProbability: 82,
        temperature: "hot",
        stage: "Upsell - Ready to Close",
        lastContact: "2 hours ago",
        nextAction: "Policy upgrade approval",
        estimatedLTV: 55000
    },
    {
        id: "LC-2025-8475",
        name: "David Lim",
        avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23FF9800' width='100' height='100'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='40' fill='white'%3EDL%3C/text%3E%3C/svg%3E",
        leadScore: 91,
        conversionProbability: 78,
        temperature: "hot",
        stage: "Comparing Quotes",
        lastContact: "1 day ago",
        nextAction: "Follow-up after competitor comparison",
        estimatedLTV: 89000
    },
    {
        id: "LC-2025-8476",
        name: "Amanda Ng",
        avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23E91E63' width='100' height='100'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='40' fill='white'%3EAN%3C/text%3E%3C/svg%3E",
        leadScore: 88,
        conversionProbability: 85,
        temperature: "hot",
        stage: "Ready to Sign",
        lastContact: "3 hours ago",
        nextAction: "Send application link",
        estimatedLTV: 71000
    }
];

// ============= Dashboard Stats =============
const dashboardStats = {
    revenueThisMonth: 12400000,
    revenueChange: +18,
    activeAICalls: 47,
    activeCallsChange: +12,
    conversionRate: 52.3,
    conversionRateChange: +20.3,
    avgTimeToConvert: 22, // Updated to reflect new average (20.4 days)
    avgTimeChange: -68, // Huge improvement from 90-day baseline
    leadsUnderNurturing: 8450,
    leadsChange: +15,
    hotLeadsReady: 247,
    hotLeadsChange: +42,
    aiCallsToday: 1247,
    appointmentsToday: 342,
    leadsCaptured: 32450,

    // New metrics for 5 lead scenarios
    totalLTVPipeline: 335000, // Sum of all 5 leads' LTV
    avgSatisfactionScore: 9.3 // Average across 5 scenarios
};

// ============= Live Activity Feed =============
const liveActivity = [
    {
        type: "call_active",
        lead: "Sarah Chen",
        agent: "Emma (AI)",
        duration: "3m 42s",
        sentiment: "Positive 😊",
        status: "Discussing maternity coverage",
        timestamp: "Just now",
        leadId: "LC-2025-8472"
    },
    {
        type: "conversion",
        lead: "Amanda Ng",
        agent: "Sharon Koh",
        status: "Application sent - Entrepreneur package",
        premium: "$285/month",
        temperature: "hot",
        timestamp: "3 min ago",
        leadId: "LC-2025-8476"
    },
    {
        type: "handoff",
        lead: "David Lim",
        agent: "James Tan",
        appointment: "Application pending",
        status: "Ready to proceed after quote comparison",
        temperature: "hot",
        timestamp: "1 hour ago",
        leadId: "LC-2025-8475"
    },
    {
        type: "call_completed",
        lead: "Linda Wong",
        agent: "Patricia Ng (Human)",
        duration: "12m 00s",
        outcome: "Policy upgrade approved - Phase 1",
        timestamp: "2 hours ago",
        leadId: "LC-2025-8474"
    },
    {
        type: "conversion",
        lead: "Michael Tan",
        agent: "David Lim (Specialist)",
        status: "Application completed via mobile",
        premium: "$185/month",
        temperature: "hot",
        timestamp: "5 hours ago",
        leadId: "LC-2025-8473"
    },
    {
        type: "trigger",
        lead: "New Lead: Jennifer Koh",
        trigger: "Property Purchase",
        campaign: "Mortgage Protection Campaign",
        status: "First call scheduled for 7 PM",
        timestamp: "15 min ago",
        leadId: "LC-2025-8477"
    }
];

// ============= Campaigns =============
const campaigns = [
    {
        id: "CAMP-001",
        name: "Pregnancy Nurture Campaign",
        status: "active",
        leadsEnrolled: 347,
        converted: 89,
        conversionRate: 25.6,
        active: 258,
        avgConversionTime: 23,
        revenue: 1200000,
        touchpoints: 12,
        duration: 90
    },
    {
        id: "CAMP-002",
        name: "Birthday Celebration Campaign",
        status: "active",
        leadsEnrolled: 1247,
        converted: 156,
        conversionRate: 12.5,
        active: 892,
        avgConversionTime: 14,
        revenue: 580000,
        touchpoints: 6,
        duration: 30
    }
];

// ============= Export Data =============
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        sarahChen,
        michaelTan,
        lindaWong,
        davidLim,
        amandaNg,
        activeLeads,
        dashboardStats,
        liveActivity,
        campaigns
    };
}
