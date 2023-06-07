import { useTranslation } from 'next-i18next'
import classes from './Hero.module.scss'

const Hero = () => {
	const { t } = useTranslation('index')

	return (
		<section className={classes.hero}>
			<div className={classes.heroWrapper}>
				<div className={classes.heroTitle}>
					<div className={classes.heroTitleFirstPhrase}>
						<h1>{t('landing-page.widget.hero.title.first.phrase')}</h1>
					</div>
					<div className={classes.heroTitleSecondPhrase}>
						<div className={classes.heroTitleLine}></div>
						<h1>{t('landing-page.widget.hero.title.second.phrase')}</h1>
					</div>
					<div className={classes.heroTitleLastPhrase}>
						<div className={classes.heroTitleThirdPhrase}>
							<h1>{t('landing-page.widget.hero.title.third.phrase')}</h1>
						</div>
						<div className={classes.heroTitleFourthPhrase}>
							<h1 className={classes.greenText}>
								{t('landing-page.widget.hero.title.fourth.phrase')}
							</h1>
						</div>
					</div>
					<p className={classes.heroTitleDescription}>
						{t('landing-page.widget.hero.description')}
					</p>
				</div>
				<div className={classes.heroImg}>Lorem ipsum dolor sit amet.</div>
			</div>
		</section>
	)
}

export default Hero
