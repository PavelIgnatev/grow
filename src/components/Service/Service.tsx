import { useTranslation } from 'next-i18next'
import classes from './Service.module.scss'

const Service = () => {
	const { t } = useTranslation('index')

	return (
		<div className={classes.service}>
			<div className={classes.serviceWrapper}>
				<div className={classes.serviceCounter}>
					{t('service-component-counter')}
				</div>
				<div className={classes.serviceName}>{t('service-component-name')}</div>
			</div>
		</div>
	)
}
export default Service
