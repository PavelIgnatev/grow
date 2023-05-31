import { useTranslation } from 'next-i18next'
import classes from './LearnMore.module.scss'

const LearnMore = () => {
	const { t } = useTranslation('index')

	return (
		<div className={classes.learnMore}>
			<a href={t('learn-more-component-href')}>
				{t('learn-more-component-title')}
			</a>
		</div>
	)
}
export default LearnMore
