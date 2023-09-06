import React from 'react'
import classes from './Testimonials.module.scss'
import EmilyAvatar from '../../images/image-emily.jpg'
import ThomasAvatar from '../../images/image-thomas.jpg'
import JennieAvatar from '../../images/image-jennie.jpg'

const Testimonials = () => {
  return (
    <div className={classes.testimonials}>
        <h1 className={classes.testimonials__heading}>Client testimonials</h1>
        <div className={classes.testimonials__row}>
            <div className={classes.testimonials__testimonial}>
                <img src={EmilyAvatar} alt='Client Avatar' className={classes.testimonials__avatar} />
                <p className={classes.testimonials__text} >We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
                <h3 className={classes.testimonials__name}>Emily R.</h3>
                <p className={classes.testimonials__title}>Marketing Director</p>
            </div>
            <div className={classes.testimonials__testimonial}>
                <img src={ThomasAvatar} alt='Client Avatar' className={classes.testimonials__avatar} />
                <p className={classes.testimonials__text} >Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>
                <h3 className={classes.testimonials__name}>Thomas S.</h3>
                <p className={classes.testimonials__title}>Chief Operating Officer</p>
            </div>
            <div className={classes.testimonials__testimonial}>
                <img src={JennieAvatar} alt='Client Avatar' className={classes.testimonials__avatar} />
                <p className={classes.testimonials__text} >Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
                <h3 className={classes.testimonials__name}>Jennie F.</h3>
                <p className={classes.testimonials__title}>Business Owner</p>
            </div>
        </div>
    </div>
  )
}

export default Testimonials