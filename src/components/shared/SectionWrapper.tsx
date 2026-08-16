import React from 'react'

const SectionWrapper = ({ children, maxHeight }: { children: React.ReactNode, maxHeight?: string }) => {
    return (
        <section className={` py-16 md:py-24 lg:py-32 px-8 bg-[#FBF9F8]`}>
            <section className='max-w-7xl w-full mx-auto xl:px-8'>
                {children}
            </section>
        </section>
    )
}

export default SectionWrapper