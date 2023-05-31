import { useTranslation } from 'next-i18next'

import LearnMore from '../../components/LearnMore/LearnMore'
import Tablet from '../../components/Tablet/Tablet'
import classes from './About.module.scss'

const About = () => {
	const { t } = useTranslation('index')

	return (
		<section className={classes.about}>
			<div className={classes.aboutWrapper}>
				<div className={classes.aboutTitle}>
					<Tablet />
					<div className={classes.aboutText}>
						<p>{t('landing-page.widget.about.description')}</p>
						<LearnMore />
					</div>
				</div>
				<div className={classes.aboutImg}>Lorem ipsum dolor sit amet.</div>
			</div>
		</section>
	)
}
export default About
