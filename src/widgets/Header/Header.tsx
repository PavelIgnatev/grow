import { useTranslation } from 'next-i18next'
import Menu from '../Menu/Menu'
import classes from './Header.module.scss'

const Header = () => {
	const { t } = useTranslation('index')

	return (
		<header className={classes.header}>
			<div className={classes.headerWrapper}>
				<div className={classes.headerTitle}>
					<a href={t('landing-page.widget.header.href')}>
						{t('landing-page.widget.header.title')}
					</a>
				</div>

				<Menu />
			</div>
		</header>
	)
}

// Разобраться с миксинами, спросить у гпт про миксины в сксс или чекнуть проект календаряи см как там заюзано

//добавить бордер для разделителя у секций, где убрал картинки

export default Header
