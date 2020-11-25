import Highway from '@dogstudio/highway';
import {TimelineLite} from 'gsap';

class Fade extends Highway.Transition {
    in ({from, to, done}) {

        const tl = new TimelineLite();
        tl.fromTo($('.cover'), 0.5, {top: '100%'}, {top: '0%'})
        .fromTo(to, 0.01, {top: '100%'}, {top: '0%'})
        .fromTo($('.cover'), 0.5, {top: '0%'}, {top: '-100%', onComplete: function(){
            from.remove();
            done();
        }});
    }
    out ({from, done}) {
        done();
    }
}

export default Fade;