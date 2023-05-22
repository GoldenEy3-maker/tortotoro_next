import { PointerEvent } from "react"

const animationDuration = 600
const minAnimationDuration = 200

export function useRippleEffect() {
  function handleRippleEffectEvent(event: PointerEvent<HTMLElement>) {
    const target = event.currentTarget
    const internalInteractionNodes = target.querySelectorAll("button, input, a")

    if (internalInteractionNodes.length) {
      const isClickedOnInternalInteractionNode = Array.from(
        internalInteractionNodes
      ).some((node) => (event.target as HTMLElement).closest(node.tagName))

      if (isClickedOnInternalInteractionNode) return
    }

    const diameter = Math.max(target.clientWidth, target.clientHeight)
    const radius = diameter / 2

    const x = event.clientX - target.getBoundingClientRect().left - radius
    const y = event.clientY - target.getBoundingClientRect().top - radius

    const ripple = document.createElement("span")

    ripple.style.animationDuration = animationDuration + "ms"
    ripple.style.left = x + "px"
    ripple.style.top = y + "px"
    ripple.style.width = ripple.style.height = diameter + "px"

    ripple.classList.add("ripple-element")
    ripple.dataset.rippleElement = "true"

    target.insertBefore(ripple, target.firstChild)

    const animationStart = Date.now()

    function handleFadeOutRipple() {
      const animationInterrupt = Date.now()
      let remainingTime =
        animationDuration - (animationInterrupt - animationStart)

      if (remainingTime < minAnimationDuration)
        remainingTime = minAnimationDuration
      ripple.style.opacity = "0"
      ripple.style.transition = `opacity ${remainingTime}ms linear`

      setTimeout(() => {
        ripple.remove()
      }, remainingTime)

      target.removeEventListener("pointerup", handleFadeOutRipple)
      target.removeEventListener("pointercancel", handleFadeOutRipple)
      target.removeEventListener("pointerleave", handleFadeOutRipple)
    }

    target.addEventListener("pointerup", handleFadeOutRipple)
    target.addEventListener("pointercancel", handleFadeOutRipple)
    target.addEventListener("pointerleave", handleFadeOutRipple)
  }

  return handleRippleEffectEvent
}
