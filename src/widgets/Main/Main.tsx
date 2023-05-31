import { useTranslation } from 'next-i18next'
import classes from './Main.module.scss'

const Main = () => {
	const { t } = useTranslation('index')

	return (
		<section className={classes.main}>
			<div className={classes.mainWrapper}>
				<div className={classes.mainTitle}>
					<div className={classes.mainTitleFirstPhrase}>
						<h1>{t('landing-page.widget.main.title.first.phrase')}</h1>
					</div>
					<div className={classes.mainTitleSecondPhrase}>
						<div className={classes.mainTitleLine}></div>
						<h1>{t('landing-page.widget.main.title.second.phrase')}</h1>
					</div>
					<div className={classes.mainTitleLastPhrase}>
						<h1>
							{t('landing-page.widget.main.title.third.phrase')}{' '}
							<span className={classes.greenText}>
								{t('landing-page.widget.main.title.fourth.phrase')}
							</span>
						</h1>
					</div>
					<p className='mainTitleDescription'>
						{t('landing-page.widget.main.description')}
					</p>
				</div>
				<div className={classes.mainImg}>Lorem ipsum dolor sit amet.</div>
			</div>
		</section>
	)
}

export default Main
