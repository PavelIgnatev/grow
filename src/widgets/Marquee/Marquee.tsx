import classes from './Marquee.module.scss'

const Marquee = () => {
	return (
		<div className={classes.marquee}>
			<div className={classes.marqueeItemsWrap}>
				<div className={classes.marqueeItems}>
					<div className={classes.marqueeItem}></div>
					<div className={classes.marqueeItem}></div>
					<div className={classes.marqueeItem}></div>
					<div className={classes.marqueeItem}></div>
					<div className={classes.marqueeItem}></div>
					<div className={classes.marqueeItem}></div>
					<div className={classes.marqueeItem}></div>
					<div className={classes.marqueeItem}></div>
					<div className={classes.marqueeItem}></div>
					<div className={classes.marqueeItem}></div>
				</div>
				<div aria-hidden='true' className={classes.marqueeItems}>
					<div className={classes.marqueeItem}></div>
					<div className={classes.marqueeItem}></div>
					<div className={classes.marqueeItem}></div>
					<div className={classes.marqueeItem}></div>
					<div className={classes.marqueeItem}></div>
					<div className={classes.marqueeItem}></div>
					<div className={classes.marqueeItem}></div>
					<div className={classes.marqueeItem}></div>
					<div className={classes.marqueeItem}></div>
					<div className={classes.marqueeItem}></div>
				</div>
			</div>
		</div>
	)
}
export default Marquee
