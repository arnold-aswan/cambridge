import SectionWrapper from "@/components/shared/SectionWrapper"
import { Award, CheckCircle2 } from "@/assets/icons"

const teamMembers = [
  {
    name: "Dr. Alistair Finch, OD",
    role: "Lead Doctor of Optometry",
    specialty: "Retinal Diagnostics & Cornea Specialist",
    bio: "Over 20 years of clinical practice specializing in advanced OCT imaging, glaucoma management, and post-surgical co-management.",
    image: "/images/optometrist_doctor.png"
  },
  {
    name: "Elena Rostova",
    role: "Master Ophthalmic Stylist",
    specialty: "Luxury Eyewear Curation & Facial Metrics",
    bio: "Trained in Milan and Paris, Elena specializes in matching facial geometry and personal style with rare, independent designer frames.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Dr. Marcus Vance, OD",
    role: "Ocular Surface & Dry Eye Director",
    specialty: "Scleral Lens Fitting & IPL Therapy",
    bio: "Dedicated to treating chronic dry eye syndrome, ocular allergies, and fitting specialized contact lenses for keratoconus.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800"
  }
]

const SpecialistTeam = () => {
  return (
    <SectionWrapper bg="bg-[#FBF9F8]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div className="space-y-3 max-w-2xl">
          <h5 className="uppercase text-[#006A6A] font-plus-jakarta-sans font-bold text-xs tracking-[1.4px]">
            Clinical Excellence Team
          </h5>
          <h2 className="dark-blue-text font-plus-jakarta-sans font-bold text-3xl sm:text-4xl capitalize">
            Meet Our Doctors & Specialists
          </h2>
          <p className="text-[#44474E] text-base">
            Our multidisciplinary team combines advanced medical doctorates with luxury optical styling expertise.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#031635] text-white font-medium text-xs">
          <Award className="size-4 text-[#90EFEF]" />
          <span>Fellows of the American Academy of Optometry</span>
        </div>
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
