import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
    selector: 'app-lottie-animation',
    standalone: true,
    imports: [LottieComponent],
    templateUrl: './lottie.component.html',
})
export class LottieAnimationComponent {
    private animationItem: AnimationItem | undefined;
    options: AnimationOptions = {
        path: "../../../assets/world.json",
        loop: true,
        autoplay: false
    };

    animationCreated(animationItem: AnimationItem): void {
        this.animationItem = animationItem;
        this.playAnimation();
    }

    playAnimation(): void {
        if (this.animationItem) {
            this.animationItem.play();
        }
    }
}