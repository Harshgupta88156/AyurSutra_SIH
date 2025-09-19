import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Index() {
  return (
    <div>
      {/* Hero with background image */}
      <section className="relative">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://ayurveda-kerala.org/wp-content/uploads/2023/06/1123.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative container py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-3xl text-center text-white">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl heading">
              Introduction to Panchakarma
            </h1>
            <p className="mt-4 text-lg opacity-90">
              Panchakarma (five actions) is a cleansing and rejuvenating program
              for the body, mind, and consciousness.
            </p>
          </div>
        </div>
      </section>

      {/* About AyurSutra portal (kept at beginning per requirements) */}
      <section>
        <div className="container py-10 sm:py-14">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold tracking-tight">
              AyurSutra – Panchakarma patient management and automated therapy
              scheduling software
            </h2>
            <p className="mt-3 text-[17px] leading-7 text-foreground/80">
              AyurSutra offers a seamless platform to manage Panchakarma
              therapies, ensuring efficiency for practitioners and convenience
              for patients. The solution combines:
            </p>
            <ul className="mt-4 list-disc space-y-1 pl-6">
              <li>
                Patient &amp; Practitioner Dashboards: Easy-to-use, organized
                access to therapy and progress details.
              </li>
              <li>
                Automated Scheduling: Prevents double booking, reduces wait
                times, and optimizes resources.
              </li>
              <li>
                Digital Records: Centralized logs and progress reports for
                seamless documentation.
              </li>
              <li>
                Smart Reminders: Notifications for sessions, precautions, and
                post-care.
              </li>
              <li>
                Feedback System: Post-session inputs to track issues and improve
                care.
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
              <Button asChild size="lg">
                <Link to="/register">Register Now</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a href="#what-is-panchakarma">Explore Knowledge</a>
              </Button>
            </div>
            <p className="mt-4 text-sm">
              <span className="font-semibold">
                for further queries contact us
              </span>
              : +91-98765 43210 • support@ayursutra.io
            </p>
          </div>
        </div>
      </section>

      {/* Knowledge Portal */}
      <section className="border-t bg-white/60 dark:bg-background/60">
        <div className="container py-10 lg:py-14 grid gap-10 lg:grid-cols-[1fr_300px]">
          {/* Main content */}
          <article className="prose prose-slate prose-a:text-[#c36] max-w-none dark:prose-invert">
            <h2 id="what-is-panchakarma">1. What is Panchakarma?</h2>
            <p>
              <strong>Panchakarma</strong> (Sanskrit: "five actions") is the
              cornerstone of Ayurvedic medicine, representing a comprehensive
              detoxification and rejuvenation therapy system. This ancient
              healing practice goes to the root cause of health problems and
              re-establishes the essential balance of the three doshas (Vata,
              Pitta, and Kapha) in the body.
            </p>
            <p>
              Unlike symptomatic treatments, Panchakarma works at both gross and
              cellular levels to:
            </p>
            <ul>
              <li>Remove accumulated toxins (ama) from the body</li>
              <li>Restore constitutional balance</li>
              <li>Rejuvenate tissues and organs</li>
              <li>Enhance the body's natural healing mechanisms</li>
            </ul>

            <h2 id="historical-background">2. Historical Background</h2>
            <p>
              Panchakarma has its roots deeply embedded in India's rich medical
              tradition, dating back 3,500 to 5,000 years. According to Hindu
              mythology, it traces back to Lord Brahma, the creator. The therapy
              is extensively documented in classical Ayurvedic texts:
            </p>
            <ul>
              <li>
                <em>Charaka Samhita</em> (1st century AD) – The oldest existing
                Ayurvedic text
              </li>
              <li>
                <em>Sushruta Samhita</em> – Focuses on surgical aspects
              </li>
              <li>
                <em>Ashtanga Hridayam</em> – Compilation of both traditions
              </li>
            </ul>
            <p>
              These ancient texts provide detailed methodologies that remain
              applicable and effective today, emphasizing the importance of
              understanding the patient's mind, body, and soul when treating
              disease.
            </p>

            <h2 id="who-should-consider">
              3. Who Should Consider Panchakarma?
            </h2>
            <h3>Ideal Candidates</h3>
            <p>If you're experiencing:</p>
            <ul>
              <li>Chronic fatigue and low energy levels</li>
              <li>Digestive issues and poor metabolism</li>
              <li>Stress and anxiety affecting daily life</li>
              <li>Sleep disturbances and restlessness</li>
              <li>Skin problems and allergies</li>
              <li>Joint pain and stiffness</li>
              <li>
                General feeling of being "not your best self" despite trying
                other solutions
              </li>
            </ul>
            <p>
              Panchakarma could be an excellent choice for you. It's suitable
              for individuals seeking a deeper approach to health rather than
              temporary relief.
            </p>
            <h3>Perfect for Modern Indian Lifestyle</h3>
            <p>
              In India's context, where fast food, late-night routines, and
              sedentary lifestyles are common, Panchakarma can help reset your
              health. Whether you're a college student dealing with study
              pressure, a working professional feeling burnt out, or a senior
              citizen managing age-related health issues—anyone seeking holistic
              healing, mental clarity, physical detox, and long-term wellness
              can benefit.
            </p>
            <h3>Age and Gender Distribution</h3>
            <ul>
              <li>Most common age group: 40–50 years (32%)</li>
              <li>Gender distribution: 68.75% women, 31.25% men</li>
              <li>Suitable for ages 20–70 with proper assessment</li>
            </ul>

            <h2 id="five-procedures">4. The Five Main Procedures</h2>
            <ProceduresTabs />

            <h2 id="treatment-phases">5. Three Phases of Treatment</h2>
            <h3>Phase 1: Purva Karma (Preparatory Procedures)</h3>
            <p>
              <strong>Duration:</strong> 3–7 days
            </p>
            <ul>
              <li>
                Deepana &amp; Pachana: Digestive fire enhancement using herbs
                like Hingwashtak churna
              </li>
              <li>
                Snehana: Internal and external oleation with medicated oils/ghee
              </li>
              <li>Swedana: Therapeutic sweating to liquefy toxins</li>
            </ul>
            <p>
              <strong>Purpose:</strong> Prepares the body for safe and effective
              main treatments by mobilizing deep-seated toxins.
            </p>
            <h3>Phase 2: Pradhana Karma (Main Procedures)</h3>
            <p>
              <strong>Duration:</strong> 3–7 days. The actual elimination
              procedures (one or more of the five main treatments) are performed
              based on individual constitution and health conditions.
            </p>
            <h3>Phase 3: Paschata Karma (Post-Treatment Care)</h3>
            <p>
              <strong>Duration:</strong> 3–7 days
            </p>
            <ul>
              <li>Gradual dietary transitions</li>
              <li>Lifestyle modifications</li>
              <li>Rejuvenating herbs (Rasayana)</li>
              <li>Restoring digestive strength</li>
            </ul>

            <h2 id="health-benefits">6. Health Benefits</h2>
            <h3>Physical Benefits</h3>
            <ul>
              <li>Deep detoxification at cellular and organ levels</li>
              <li>Enhanced metabolism and improved digestion</li>
              <li>Boosted immunity and disease resistance</li>
              <li>Weight management through toxin elimination</li>
              <li>Improved sleep quality and energy levels</li>
              <li>Pain relief from chronic conditions</li>
              <li>Better skin health and complexion</li>
            </ul>
            <h3>Mental and Emotional Benefits</h3>
            <ul>
              <li>Reduced stress and anxiety levels</li>
              <li>Enhanced mental clarity and focus</li>
              <li>Emotional stability and resilience</li>
              <li>Improved self-efficacy in health management</li>
              <li>Better stress-coping mechanisms</li>
            </ul>
            <h3>Long-term Wellness</h3>
            <ul>
              <li>
                Preventive healthcare – maintains health during seasonal changes
              </li>
              <li>Increased lifespan through cellular rejuvenation</li>
              <li>
                Enhanced drug efficacy when combined with other treatments
              </li>
              <li>
                Sustainable lifestyle changes supporting overall well-being
              </li>
            </ul>

            <h2 id="conditions-treated">7. Conditions Treated</h2>
            <h3>Successfully Managed Conditions (Based on Clinical Data)</h3>
            <ul>
              <li>Diabetes – 22.5%</li>
              <li>Arthritis – 21.25%</li>
              <li>Asthma – 21.25%</li>
              <li>Depression – 15%</li>
              <li>Skin Disorders – 10%</li>
              <li>Other conditions – 10%</li>
            </ul>
            <h3>Specific Therapeutic Applications</h3>
            <ul>
              <li>Respiratory: Asthma, chronic cough, sinusitis, allergies</li>
              <li>
                Digestive: IBS, chronic constipation, acidity, poor appetite
              </li>
              <li>
                Musculoskeletal: Arthritis, joint pain, muscle stiffness,
                paralysis
              </li>
              <li>
                Neurological: Stress disorders, insomnia, migraine, depression
              </li>
              <li>Skin: Eczema, psoriasis, chronic skin conditions</li>
              <li>Metabolic: Diabetes, obesity, thyroid disorders</li>
              <li>
                Women's Health: Menstrual irregularities, fertility issues
              </li>
            </ul>

            <h2 id="contraindications">8. Contraindications and Precautions</h2>
            <h3>Absolute Contraindications</h3>
            <ul>
              <li>Pregnancy (especially first trimester)</li>
              <li>Acute infectious diseases and fevers</li>
              <li>Severe cardiovascular conditions</li>
              <li>Active cancer (consult oncologist)</li>
              <li>Severe debility or weakness</li>
              <li>Children under 12 years (modified protocols may be used)</li>
              <li>Adults over 75 years (requires careful assessment)</li>
            </ul>
            <h3>Relative Contraindications (Require Medical Supervision)</h3>
            <ul>
              <li>Recent surgery or major illness</li>
              <li>Bleeding disorders</li>
              <li>Severe anemia</li>
              <li>Digestive disorders during acute phase</li>
              <li>Mental health conditions requiring medication</li>
            </ul>
            <p>
              <strong>Important Safety Measures:</strong> Always undergo
              treatment under qualified Ayurvedic physicians; complete medical
              history and constitution assessment are mandatory; proper
              preparation and post-treatment care are essential; avoid strenuous
              activities during treatment; follow dietary guidelines strictly.
            </p>

            <h2 id="duration-expectations">9. Duration and Expectations</h2>
            <h3>Treatment Duration Options</h3>
            <ul>
              <li>
                5 days: Basic detoxification (58.75% of patients choose this)
              </li>
              <li>7 days: Moderate cleansing (31% of patients)</li>
              <li>10+ days: Deep rejuvenation programs (11.25% of patients)</li>
              <li>21–28 days: Comprehensive transformation programs</li>
            </ul>
            <h3>Expected Outcomes</h3>
            <p>
              <strong>Immediate Effects (During Treatment):</strong> Increased
              elimination of toxins; temporary fatigue or emotional releases;
              changes in sleep patterns; improved appetite and digestion.
            </p>
            <p>
              <strong>Short-term Benefits (1–4 weeks):</strong> Increased energy
              levels; better sleep quality; reduced stress and anxiety; improved
              skin complexion.
            </p>
            <p>
              <strong>Long-term Results (3+ months):</strong> Complete
              improvement: 28%; Marked improvement: 22%; Moderate improvement:
              21%; Mild improvement: 19%; No improvement: 10%.
            </p>

            <h2 id="choosing-practitioner">
              10. Choosing a Qualified Practitioner
            </h2>
            <h3>Essential Qualifications to Look For</h3>
            <ul>
              <li>Formal Ayurvedic education (BAMS degree minimum)</li>
              <li>Specialized Panchakarma training and certification</li>
              <li>Clinical experience with diverse conditions</li>
              <li>Proper facility with hygiene standards</li>
              <li>Personalized approach to treatment planning</li>
            </ul>
            <h3>Questions to Ask Your Practitioner</h3>
            <ol>
              <li>What is your educational background and experience?</li>
              <li>How will you assess my constitution and health condition?</li>
              <li>Which specific procedures do you recommend for me?</li>
              <li>What are the expected outcomes and timeline?</li>
              <li>How will you monitor my progress during treatment?</li>
              <li>What post-treatment care will be provided?</li>
            </ol>
            <h3>Red Flags to Avoid</h3>
            <ul>
              <li>Practitioners without proper Ayurvedic qualifications</li>
              <li>One-size-fits-all treatment approaches</li>
              <li>Lack of proper assessment or medical history taking</li>
              <li>Unclean or unprofessional facilities</li>
              <li>Unrealistic promises or guarantees</li>
            </ul>

            <h2 id="scientific-research">11. Scientific Research</h2>
            <h3>Published Clinical Studies</h3>
            <ul>
              <li>
                NIH/PMC Research Findings: Significant improvements in
                self-efficacy for health management; positive changes in health
                behaviors sustained at 3 months; reduced depression and
                increased perceived social support; effective as adjunct therapy
                with conventional treatments.
              </li>
              <li>
                Clinical Effectiveness: Cancer care – effective in managing
                chemotherapy and radiotherapy side effects; chronic diseases –
                better outcomes when combined with conventional medicine; mental
                health �� significant improvements in stress and anxiety levels;
                immune function – enhanced immune response and disease
                resistance.
              </li>
            </ul>
            <h3>Research Methodology</h3>
            <p>
              Studies utilize both quantitative measures (physiological
              parameters, biochemical markers) and qualitative assessments
              (quality of life scores, subjective well-being measures) with
              long-term follow-up tracking benefits over 3–12 months
              post-treatment.
            </p>

            <h2 id="faq">12. Frequently Asked Questions</h2>
            <h3>Is Panchakarma safe?</h3>
            <p>
              Yes, when performed by qualified practitioners with proper
              assessment, Panchakarma is very safe. The therapy has been used
              successfully for thousands of years with minimal side effects when
              guidelines are followed.
            </p>
            <h3>How often should I undergo Panchakarma?</h3>
            <p>
              Traditionally recommended: Healthy individuals – once or twice
              yearly during seasonal transitions; chronic conditions – as
              advised by practitioner (may be more frequent initially);
              maintenance – annual treatments for preventive care.
            </p>
            <h3>Can I continue my regular medications?</h3>
            <p>
              Generally yes, but inform your Ayurvedic physician about all
              medications. Some medications may need timing adjustments, and the
              practitioner will coordinate with your primary physician if
              needed.
            </p>
            <h3>What should I expect during treatment?</h3>
            <p>
              Daily consultations and procedures; specific dietary guidelines;
              temporary lifestyle restrictions; possible healing reactions
              (fatigue, emotional releases); progressive improvement in energy
              and well-being.
            </p>
            <h3>Is the treatment expensive?</h3>
            <p>
              Costs vary based on duration and type of procedures, location and
              facility standards, and individual treatment requirements.
              Generally ranges from ₹15,000–₹50,000 for comprehensive programs.
            </p>
            <h3>Can I work during treatment?</h3>
            <p>
              Light work may be possible, but it's recommended to take time off
              for optimal results, avoid strenuous activities, allow for rest
              and recovery, and follow practitioner's specific guidelines.
            </p>

            <h2 id="resources">Resources and References</h2>
            <h3>Academic Sources</h3>
            <ol>
              <li>
                Singh, Nishant. "Panchakarma: Cleaning and Rejuvenation Therapy
                for Curing the Diseases." Journal of Pharmacognosy and
                Phytochemistry, Vol. 1 No. 2, 2012.
              </li>
              <li>
                Conboy LA, et al. "Ayurveda and Panchakarma: Measuring the
                Effects of a Holistic Health Intervention." PMC, 2009.
              </li>
              <li>
                Clinical Studies – Various peer-reviewed research available
                through PubMed and PMC databases
              </li>
            </ol>
            <h3>Professional Organizations</h3>
            <ul>
              <li>National Institute of Ayurveda, India</li>
              <li>
                Central Council for Research in Ayurveda and Siddha (CCRAS)
              </li>
              <li>World Health Organization – Traditional Medicine Program</li>
            </ul>
            <h3>Additional Reading</h3>
            <ul>
              <li>
                Classical Ayurvedic texts: Charaka Samhita, Sushruta Samhita
              </li>
              <li>Modern research publications on Panchakarma efficacy</li>
              <li>Guidelines from recognized Ayurvedic institutions</li>
            </ul>
            <h3>Additional Resources</h3>
            <ul>
              <li>
                <a
                  href="https://ayurveda.com/introduction-to-panchakarma/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Introduction to Panchakarma – The Ayurvedic Institute
                </a>
              </li>
              <li>
                <a
                  href="https://youtu.be/K6tONjmIaEM?si=Cvz1byvDi25lMTAx"
                  target="_blank"
                  rel="noreferrer"
                >
                  Video: Panchakarma Overview
                </a>
              </li>
              <li>
                <a
                  href="https://share.google/v2gNWFKebs2LdBdFG"
                  target="_blank"
                  rel="noreferrer"
                >
                  Reference: Shared resource
                </a>
              </li>
            </ul>

            <p className="mt-10 text-sm text-muted-foreground">
              This knowledge portal is for educational purposes. Always consult
              qualified Ayurvedic physicians before undertaking Panchakarma
              therapy. Individual results may vary based on constitution, health
              condition, and adherence to treatment protocols.
              <br />
              <strong>Last Updated:</strong> September 2025
            </p>
          </article>

          {/* Sidebar */}
          <aside className="lg:pl-8">
            <div className="sticky top-24 rounded-xl border bg-white/70 p-5 shadow-sm backdrop-blur dark:bg-background/60">
              <h4 className="text-sm font-semibold tracking-wide">
                Table of Contents
              </h4>
              <nav className="mt-3 text-sm space-y-1">
                <TOCItem
                  href="#what-is-panchakarma"
                  label="1. What is Panchakarma?"
                />
                <TOCItem
                  href="#historical-background"
                  label="2. Historical Background"
                />
                <TOCItem
                  href="#who-should-consider"
                  label="3. Who Should Consider Panchakarma?"
                />
                <TOCItem
                  href="#five-procedures"
                  label="4. The Five Main Procedures"
                />
                <TOCItem
                  href="#treatment-phases"
                  label="5. Three Phases of Treatment"
                />
                <TOCItem href="#health-benefits" label="6. Health Benefits" />
                <TOCItem
                  href="#conditions-treated"
                  label="7. Conditions Treated"
                />
                <TOCItem
                  href="#contraindications"
                  label="8. Contraindications & Precautions"
                />
                <TOCItem
                  href="#duration-expectations"
                  label="9. Duration & Expectations"
                />
                <TOCItem
                  href="#choosing-practitioner"
                  label="10. Choosing a Practitioner"
                />
                <TOCItem
                  href="#scientific-research"
                  label="11. Scientific Research"
                />
                <TOCItem href="#faq" label="12. FAQ" />
                <TOCItem href="#resources" label="Resources" />
              </nav>
              <div className="mt-5">
                <Button asChild className="w-full">
                  <Link to="/register">Register</Link>
                </Button>
              </div>
            </div>
            <div className="mt-5 rounded-xl border bg-white/70 p-5 shadow-sm backdrop-blur dark:bg-background/60">
              <h4 className="text-sm font-semibold tracking-wide">
                Recommended Resources
              </h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a
                    className="hover:text-primary underline underline-offset-4"
                    href="https://ayurveda.com/introduction-to-panchakarma/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Introduction to Panchakarma – The Ayurvedic Institute
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-primary underline underline-offset-4"
                    href="https://youtu.be/K6tONjmIaEM?si=Cvz1byvDi25lMTAx"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Video: Panchakarma Overview
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-primary underline underline-offset-4"
                    href="https://share.google/v2gNWFKebs2LdBdFG"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Reference: Shared resource
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

function TOCItem({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="block rounded px-2 py-1 text-foreground/80 hover:bg-secondary hover:text-foreground"
    >
      {label}
    </a>
  );
}

function ProceduresTabs() {
  return (
    <div className="not-prose">
      <Tabs defaultValue="vamana">
        <TabsList className="flex flex-wrap gap-2 bg-secondary p-2">
          <TabsTrigger value="vamana">Vamana</TabsTrigger>
          <TabsTrigger value="virechana">Virechana</TabsTrigger>
          <TabsTrigger value="basti">Basti</TabsTrigger>
          <TabsTrigger value="nasya">Nasya</TabsTrigger>
          <TabsTrigger value="raktamokshana">Raktamokshana</TabsTrigger>
        </TabsList>
        <div className="mt-6 grid gap-8">
          <TabsContent value="vamana">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">
                  Vamana (Therapeutic Vomiting)
                </h3>
                <p>
                  <strong>Purpose:</strong> Eliminates excess Kapha dosha from
                  upper respiratory and digestive systems.
                </p>
                <p>
                  <strong>Best for:</strong> Asthma, respiratory disorders, skin
                  diseases, anorexia.
                </p>
                <p>
                  <strong>Herbs used:</strong> Madanaphala, Nimba, Kutaja, and
                  other specially prepared emetic preparations.
                </p>
              </div>
              <div className="rounded-lg border bg-white p-4 shadow-sm dark:bg-background">
                Gentle emesis therapy under supervision helps remove Kapha
                toxins and restore balance.
              </div>
            </div>
          </TabsContent>
          <TabsContent value="virechana">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">
                  Virechana (Therapeutic Purgation)
                </h3>
                <p>
                  <strong>Purpose:</strong> Eliminates excess Pitta dosha
                  through controlled bowel movements.
                </p>
                <p>
                  <strong>Best for:</strong> Liver disorders, skin problems,
                  chronic jaundice, gastrointestinal issues.
                </p>
                <p>
                  <strong>Process:</strong> Uses specially prepared herbal
                  purgatives for gentle yet effective cleansing.
                </p>
              </div>
              <div className="rounded-lg border bg-white p-4 shadow-sm dark:bg-background">
                Pitta reduction through medicated purgation supports skin,
                liver, and gut health.
              </div>
            </div>
          </TabsContent>
          <TabsContent value="basti">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">
                  Basti (Medicated Enemas)
                </h3>
                <p>
                  <strong>Purpose:</strong> Eliminates excess Vata dosha,
                  considered the most important therapy.
                </p>
                <p>
                  <strong>Types:</strong> Oil-based (Anuvasana) – nourishing;
                  Decoction-based (Niruha) – cleansing.
                </p>
                <p>
                  <strong>Best for:</strong> Neuromuscular disorders, arthritis,
                  paralysis, urogenital problems.
                </p>
              </div>
              <div className="rounded-lg border bg-white p-4 shadow-sm dark:bg-background">
                Targeted Vata-pacifying enema therapies nourish and cleanse.
              </div>
            </div>
          </TabsContent>
          <TabsContent value="nasya">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">
                  Nasya (Nasal Administration)
                </h3>
                <p>
                  <strong>Purpose:</strong> Cleanses head, neck, and sinus
                  regions.
                </p>
                <p>
                  <strong>Methods:</strong> Oil instillation, powder
                  insufflation, medicated smoke inhalation.
                </p>
                <p>
                  <strong>Best for:</strong> Headaches, migraines, sinusitis,
                  hair problems, mental clarity.
                </p>
              </div>
              <div className="rounded-lg border bg-white p-4 shadow-sm dark:bg-background">
                Nasal routes directly address head and neck channels for
                clarity.
              </div>
            </div>
          </TabsContent>
          <TabsContent value="raktamokshana">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">
                  Raktamokshana (Bloodletting)
                </h3>
                <p>
                  <strong>Purpose:</strong> Purifies blood and eliminates
                  blood-borne toxins.
                </p>
                <p>
                  <strong>Methods:</strong> Leech therapy, cupping, or
                  controlled bloodletting.
                </p>
                <p>
                  <strong>Best for:</strong> Skin disorders, gout, blood-related
                  diseases, certain inflammatory conditions.
                </p>
              </div>
              <div className="rounded-lg border bg-white p-4 shadow-sm dark:bg-background">
                Specialized techniques purify the blood to alleviate
                inflammatory conditions.
              </div>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
