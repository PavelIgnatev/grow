import { useTranslation } from 'next-i18next'
import classes from './Tablet.module.scss'

const Tablet = () => {
	const { t } = useTranslation('index')

	return (
		<div className={classes.tablet}>
			<img
				src={t('tablet-decor-component-img-path')}
				alt='about'
				className={classes.tabletImg}
			/>
		</div>
	)
}
export default Tablet
