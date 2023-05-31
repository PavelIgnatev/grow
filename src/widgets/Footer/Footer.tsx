import { useTranslation } from 'next-i18next'
import classes from './Footer.module.scss'

const Footer = () => {
	const { t } = useTranslation('index')

	return (
		<footer className={classes.footer}>
			<div className={classes.footerWrapper}>
				<div className={classes.footerTitle}>
					<a href={t('landing-page.widget.footer.href')}>
						{t('landing-page.widget.footer.title')}
					</a>
				</div>
				<div className={classes.footerNavbar}>
					<div className={classes.signUp}>
						{t('landing-page.widget.footer.sign.up.first.phrase')} <br />{' '}
						{t('landing-page.widget.footer.sign.up.second.phrase')}
					</div>
					<div className={classes.privacyText}>
						{t('landing-page.widget.footer.privacy')}
					</div>
				</div>
			</div>
		</footer>
	)
}
export default Footer
