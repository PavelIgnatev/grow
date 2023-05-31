import { useTranslation } from 'next-i18next'
import Service from '../../components/Service/Service'
import classes from './Services.module.scss'

const Services = () => {
	const { t } = useTranslation('index')

	return (
		<section className={classes.services}>
			<div className={classes.servicesWrapper}>
				<Service />
				<Service />
				<Service />
				<Service />
			</div>
		</section>
	)
}
export default Services
