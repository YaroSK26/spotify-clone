"use client";

import * as RadixSlider from "@radix-ui/react-slider";

interface SlideProps {
  value?: number;
  onChange?: (value: number) => void;
  max?: number;
}

const SliderTrack: React.FC<SlideProps> = ({
  value = 1,
  onChange,
  max = 1,
}) => {
  const handleChange = (newValue: number[]) => {
    onChange?.(newValue[0]);
  };

  return (
    <RadixSlider.Root
      className="
        relative
        flex
        items-center
        select-none
        touch-none
        w-full
        h-1
        group
      "
      defaultValue={[1]}
      value={[value]}
      onValueChange={handleChange}
      max={max}
      step={0.1}
      aria-label="Volume"
    >
      <RadixSlider.Track
        className="
          bg-neutral-600
          relative
          grow
          rounded-full
          h-[3px]
        "
      >
        <RadixSlider.Range
          className="
            absolute
            bg-white
            group-hover:bg-green-500
            rounded-full
            h-full
            left-0
            transition-width
          "
          // style={{ width: `${(value / max) * 100}%` }}
        />
      </RadixSlider.Track>
      <RadixSlider.Thumb
        className="
            block
            w-3
            h-3
            bg-transparent
            group-hover:bg-white
            rounded-full
            cursor-pointer
            focus:outline-none
          "
      />
    </RadixSlider.Root>
  );
};

export default SliderTrack;
