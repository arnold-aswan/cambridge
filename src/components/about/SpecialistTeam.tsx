import SectionWrapper from "@/components/shared/SectionWrapper"
import { CheckCircle2 } from "@/assets/icons"

const teamMembers = [
  {
    name: "Dr. Amara Okoro",
    role: "Lead Optometrist",
    specialty: "BSc (Hons) MCOptom",
    bio: "Specializing in pediatric optometry and advanced contact lens therapeutics with over a decade of clinical excellence.",
    image: "/images/optometrist_doctor.png"
  },
  {
    name: "Dr. Julian Vance",
    role: "Clinical Director",
    specialty: "Doctor of Optometry (OD)",
    bio: "Expert in dry eye management and ocular pathology diagnostics, leading Cambridge's clinical protocols and training.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Dr. Sarah Mwangi",
    role: "Senior Clinician",
    specialty: "BSc Optom",
    bio: "Specialist in refractive errors and binocular vision assessments, with a focus on precision wavefront lens prescription.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
  }
]

const SpecialistTeam = () => {
  return (
    <SectionWrapper bg="bg-[#FBF9F8]">
      <div className="text-center mb-16 space-y-3">
        <h2 className="font-plus-jakarta-sans text-3xl sm:text-4xl font-bold text-[#031635] tracking-tight">
          Meet the Experts
        </h2>
        <p className="text-[#44474E] max-w-xl mx-auto text-base">
          Our clinical team brings decades of combined experience from leading global institutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="bg-white rounded-2xl overflow-hidden border border-[#E4E2E2] shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
          >
            <div className="relative h-72 overflow-hidden bg-[#F5F3F3]">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-[#031635]/90 text-[#90EFEF] px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md">
                Certified OD
              </div>
            </div>

            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-1">
                <h3 className="text-xl font-bold font-plus-jakarta-sans dark-blue-text">
                  {member.name}
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-[#006A6A]">
                  {member.role}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-[#606060] pt-1">
                  <CheckCircle2 className="size-3.5 text-[#006A6A]" />
                  <span>{member.specialty}</span>
                </div>
              </div>

              <p className="text-sm text-[#44474E] leading-relaxed pt-2 border-t border-[#E4E2E2]">
                {member.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default SpecialistTeam
