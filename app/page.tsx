import { Button } from "@/components/ui/button"

export default function Home() {
  return <div className="p-8">
    <div className="info">Question 3 out of 10</div>
    <div className="text-2xl text-white font-varela">Which component controls a helicopter&#39;s pitch and roll movement?</div>
    <div className="flex flex-col gap-8 mt-16">
      <Button variant='answer-selection' size="xl">Cyclic</Button>
      <Button variant='answer-variant' size="xl">Cyclic</Button>
      <Button variant='answer-variant' size="xl">Cyclic</Button>
      <Button variant='answer-variant' size="xl">Cyclic</Button>
    </div>
  </div>
}
