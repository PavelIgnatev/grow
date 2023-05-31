import { useTranslation } from 'next-i18next'
import classes from './Schedule.module.scss'

const Schedule = () => {
	const { t } = useTranslation('index')

	return (
		<div className={classes.schedule}>
			<a href={t('schedule-component-href')}>{t('schedule-component-title')}</a>
		</div>
	)
}
export default Schedule
