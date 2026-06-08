---
name: Ethereal Union
colors:
  surface: '#faf9f5'
  surface-dim: '#dbdad6'
  surface-bright: '#faf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f4f0'
  surface-container: '#efeeea'
  surface-container-high: '#e9e8e4'
  surface-container-highest: '#e3e2df'
  on-surface: '#1b1c1a'
  on-surface-variant: '#4d4635'
  inverse-surface: '#2f312e'
  inverse-on-surface: '#f2f1ed'
  outline: '#7f7663'
  outline-variant: '#d0c5af'
  surface-tint: '#735c00'
  primary: '#735c00'
  on-primary: '#ffffff'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#e9c349'
  secondary: '#7a5642'
  on-secondary: '#ffffff'
  secondary-container: '#fecdb4'
  on-secondary-container: '#795541'
  tertiary: '#516356'
  on-tertiary: '#ffffff'
  tertiary-container: '#a5b8a9'
  on-tertiary-container: '#38493e'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#ffdbca'
  secondary-fixed-dim: '#ecbda4'
  on-secondary-fixed: '#2e1506'
  on-secondary-fixed-variant: '#603f2d'
  tertiary-fixed: '#d4e7d8'
  tertiary-fixed-dim: '#b8cbbc'
  on-tertiary-fixed: '#0e1f15'
  on-tertiary-fixed-variant: '#394b3f'
  background: '#faf9f5'
  on-background: '#1b1c1a'
  surface-variant: '#e3e2df'
  champagne-gold: '#D4AF37'
  dusty-rose: '#DCAE96'
  forest-green: '#2D3E33'
  cream-foundation: '#FDFCF8'
  soft-ink: '#4A4A4A'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: Libre Franklin
    fontSize: 18px
    fontWeight: '300'
    lineHeight: 28px
    letterSpacing: 0.01em
  body-md:
    fontFamily: Libre Franklin
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Libre Franklin
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base-unit: 8px
  margin-mobile: 24px
  margin-desktop: 64px
  gutter: 16px
  section-gap: 80px
---

## Brand & Style

This design system is crafted for a romantic, high-end wedding invitation experience. The brand personality is timeless, sophisticated, and deeply personal, evoking an emotional response of intimacy and celebration. 

The design style leans into **Minimalism** blended with **Tactile** flourishes. It prioritizes vast whitespace to create a sense of "breath" and luxury, punctuated by organic floral illustrations and delicate borders. The interface should feel like high-quality stationery brought to life, utilizing subtle textures to mimic the feel of premium paper. Motion plays a critical role, using soft fades and organic floating reveals to mimic the gentle flutter of flower petals or the slow opening of a physical envelope.

## Colors

The palette is anchored in a soft, luminous **Cream Foundation** (`#FDFCF8`) which serves as the primary canvas, replacing stark white to add warmth and a vintage paper feel. 

**Champagne Gold** is used as the primary brand color for highlights, delicate borders, and call-to-action accents. **Dusty Rose** provides a romantic secondary tone for illustrative elements and soft backgrounds. **Forest Green** is reserved for high-contrast accents, such as botanical details and critical text, providing a grounded, organic counterpoint to the softer hues. Text should primarily use **Soft Ink** (`#4A4A4A`) rather than pure black to maintain the ethereal aesthetic.

## Typography

The typography system relies on a high-contrast pairing between the dramatic, elegant **Playfair Display** and the functional, understated **Libre Franklin**. 

**Playfair Display** is used for all headlines and display text, emphasizing its high-contrast strokes to evoke classic editorial design. **Libre Franklin** is used for body copy and logistical details, providing clarity and a modern touch. For a touch of formal elegance, important metadata (like dates or locations) should use the **label-caps** style, which utilizes increased letter spacing for a premium feel. All typography should prioritize readability while maintaining a generous line height to support the airy, minimalist layout.

## Layout & Spacing

The layout philosophy follows a **Fluid Grid** with exceptionally generous margins to maintain an "uncluttered" and premium atmosphere. 

On mobile, a 4-column grid is used with 24px side margins. On larger screens, the design expands to a 12-column grid with wide gutters and significant horizontal padding. The vertical rhythm is governed by a large "section-gap" (80px or more) between content blocks to ensure each piece of information—whether the RSVP form or the ceremony map—is given its own space to breathe. Content should be centered frequently to reinforce the formal, invitation-style alignment.

## Elevation & Depth

This design system avoids heavy shadows, instead using **Tonal Layers** and **Glassmorphism** to create depth. 

Surface levels are established through subtle color shifts—for example, a Dusty Rose card sitting atop a Cream background. For interactive overlays or floating navigation menus, use a **Backdrop Blur** (frosted glass effect) with a very low-opacity Champagne Gold tint. If shadows are necessary, they should be "Ambient Shadows": highly diffused, with a very low opacity (5-10%) and a slight Forest Green or Warm Brown tint to keep the look organic rather than digital. Thin, 1px gold or rose-colored borders are used to define edges without adding visual weight.

## Shapes

The shape language is primarily **Soft**, using subtle 4px corners for most containers to maintain a sense of formal structure while removing the harshness of sharp points. 

Buttons and specialized interactive elements may use a "Pill-shape" to contrast with the more structured layout containers. Decorative frames often employ "arch" shapes or organic, non-geometric curves to mimic botanical forms or classic architectural windows.

## Components

- **Buttons:** Primary buttons are pill-shaped with a Champagne Gold background and Soft Ink text. Secondary buttons are "ghost" style with a 1px Gold border and elegant serif text.
- **Input Fields:** Use a minimalist approach—single bottom-line borders in Gold or Forest Green rather than enclosed boxes. Labels should be small and uppercase.
- **Cards:** Cards should have no visible border or a very delicate 0.5px line. They rely on soft background tints (Dusty Rose or a slightly darker Cream) to separate them from the main canvas.
- **Floral Illustrations:** Not strictly a UI component, but these should be used as background anchors, often "bleeding" off the edge of the screen or layered behind text to create depth.
- **RSVP Chips:** Small, rounded-sm chips in Forest Green for "Accepted" and Dusty Rose for "Declined," using subtle icons.
- **Lists:** Use custom botanical icons (e.g., a small leaf or flower bud) as bullet points for itinerary items.