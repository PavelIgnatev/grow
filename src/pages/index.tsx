import About from '@/widgets/About/About'
import Footer from '@/widgets/Footer/Footer'
import Header from '@/widgets/Header/Header'
import Hero from '@/widgets/Hero/Hero'
import Marquee from '@/widgets/Marquee/Marquee'
import ScheduleCall from '@/widgets/ScheduleCall/ScheduleCall'
import Services from '@/widgets/Services/Services'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'

export async function getStaticProps({ locale }: { locale: string }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ['index'])),
		},
	}
}

export default function Main() {
	const { t } = useTranslation('index')

	return (
		<>
			<Head>
				<title>{t('main-page.title')}</title>
			</Head>
			<Header />
			<Hero />
			<Marquee />
			<About />
			<Services />
			<About />
			<ScheduleCall />
			<Footer />
		</>
	)
}
