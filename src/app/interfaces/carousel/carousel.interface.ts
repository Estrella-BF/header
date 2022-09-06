import { RadioButtonsEnum } from "src/app/enums/carousel-enum";

export interface ICarouselStyle {
    images: ICarouselImagesStyle;
    fontSize: string;
    radioButtons: RadioButtonsEnum;
}

export interface ICarouselImagesStyle {
    width: string;
    height: string;
    heightMobile: string;
}
