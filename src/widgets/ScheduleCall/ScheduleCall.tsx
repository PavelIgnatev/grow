import { useTranslation } from 'next-i18next'
import Schedule from '../../components/Schedule/Schedule'
import classes from './ScheduleCall.module.scss'

const ScheduleCall = () => {
	const { t } = useTranslation('index')

	return (
		<section className={classes.scheduleCall}>
			<div className={classes.scheduleCallWrapper}>
				<div className={classes.yourFutureText}>
					{t('landing-page.widget.schedule.call.title.first.phrase')}{' '}
					<span className={classes.greenText}>
						{t('landing-page.widget.schedule.call.title.second.phrase')}
					</span>
					<br />
					{t('landing-page.widget.schedule.call.title.third.phrase')}
				</div>
				<div className={classes.descriptionText}>
					{t('landing-page.widget.schedule.call.description.first.phrase')}{' '}
					<br />
					{t('landing-page.widget.schedule.call.description.second.phrase')}
				</div>
				<Schedule />
			</div>
		</section>
	)
}
export default ScheduleCall
