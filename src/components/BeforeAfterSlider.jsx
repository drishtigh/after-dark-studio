import {
  ReactCompareSlider,
  ReactCompareSliderImage
} from "react-compare-slider";

export default function BeforeAfterSlider({
  before,
  after,
  beforeLabel = "Before",
  afterLabel = "After"
}) {
  return (
    <ReactCompareSlider
      itemOne={
        <ReactCompareSliderImage
          src={before}
          alt={beforeLabel}
        />
      }
      itemTwo={
        <ReactCompareSliderImage
          src={after}
          alt={afterLabel}
        />
      }
    />
  );
}