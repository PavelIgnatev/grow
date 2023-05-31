import { useTranslation } from 'next-i18next'
import { useState } from 'react'
import Service from '../../components/Service/Service'
import classes from './Menu.module.scss'

const Menu = () => {
	const { t } = useTranslation('index')

	const [show, setShow] = useState(false)
	return (
		<section className={classes.menu}>
			<button
				className={classes.menuBtn}
				onClick={() => setShow(prev => !prev)}
			>
				<img
					className={classes.burger}
					src='https://assets-global.website-files.com/62a059f7c3b9147ea6a4afb2/62b48192cd21026a38aba88a_burger.svg'
					alt='menu'
				/>
			</button>
			{show && (
				<div className={classes.menuWrapper}>
					<Service />
				</div>
			)}
		</section>
	)
}

export default Menu
