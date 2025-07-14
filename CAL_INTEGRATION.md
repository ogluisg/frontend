# Cal.com Integration

This project integrates Cal.com for calendar scheduling using the official `@calcom/embed-react` library, allowing visitors to book discovery calls and consultations directly from the website.

## Features

- **Direct Booking**: One-click scheduling for discovery calls
- **Multiple Booking Types**: Support for different consultation types
- **Embedded Calendar**: Seamless integration with Cal.com's booking system
- **Responsive Design**: Works on all device sizes
- **Customizable**: Easy to configure booking options and styling
- **Official Library**: Uses the official Cal.com React component

## Components

### Cal Component

The main component for integrating Cal.com booking buttons using the official library.

```tsx
import Cal from "@calcom/embed-react";

<Cal
  calLink="https://cal.com/your-username/event-name"
  config={{
    name: "AI Agency",
    email: "",
    notes: "Discovery call for AI services",
    guests: [],
    guest: "",
    date: "",
    timezone: "America/Los_Angeles",
  }}
  className="your-button-styles"
>
  Schedule Discovery Call
</Cal>;
```

**Props:**

- `calLink`: Your Cal.com booking link
- `config`: Booking configuration object
- `className`: Additional CSS classes
- `children`: Custom button content

### BookingModal Component

A modal that shows different booking options.

```tsx
import { BookingModal } from "@/components/ui/BookingModal";

<BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />;
```

## Configuration

### Cal.com Setup

1. **Create a Cal.com Account**: Sign up at [cal.com](https://cal.com)
2. **Set Up Event Types**: Create different event types for your consultations
3. **Get Booking Links**: Copy the booking links for each event type

### Update Configuration

Edit `src/lib/cal-config.ts` to customize your booking setup:

```typescript
export const CAL_CONFIG = {
  // Your main Cal.com link
  calLink: "https://cal.com/your-username/discovery-call",

  // Default booking configuration
  defaultConfig: {
    name: "AI Agency",
    email: "",
    notes: "Discovery call for AI services",
    guests: [],
    guest: "",
    date: "",
    timezone: "America/Los_Angeles",
  },

  // Available booking types
  bookingTypes: {
    discovery: {
      name: "Discovery Call",
      duration: "30 minutes",
      description: "Free consultation to discuss your AI needs",
      calLink: "https://cal.com/your-username/discovery-call",
    },
    technical: {
      name: "Technical Consultation",
      duration: "60 minutes",
      description: "Deep dive into technical requirements",
      calLink: "https://cal.com/your-username/technical-consultation",
    },
    proposal: {
      name: "Proposal Review",
      duration: "45 minutes",
      description: "Review custom AI solution proposal",
      calLink: "https://cal.com/your-username/proposal-review",
    },
  },

  // Business hours for availability
  businessHours: {
    timezone: "America/Los_Angeles",
    hours: {
      monday: { start: "09:00", end: "18:00" },
      tuesday: { start: "09:00", end: "18:00" },
      wednesday: { start: "09:00", end: "18:00" },
      thursday: { start: "09:00", end: "18:00" },
      friday: { start: "09:00", end: "18:00" },
      saturday: { start: "10:00", end: "16:00" },
      sunday: { start: "10:00", end: "16:00" },
    },
  },
};
```

## Usage Examples

### Basic Booking Button

```tsx
import Cal from "@calcom/embed-react";

<Cal calLink="https://cal.com/your-username/discovery-call">Book a Call</Cal>;
```

### Styled Booking Button

```tsx
import Cal from "@calcom/embed-react";

<Cal
  calLink="https://cal.com/your-username/discovery-call"
  config={{
    name: "AI Agency",
    email: "",
    notes: "Discovery call for AI services",
    guests: [],
    guest: "",
    date: "",
    timezone: "America/Los_Angeles",
  }}
  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8"
>
  Schedule Discovery Call
</Cal>;
```

### Booking Modal

```tsx
import { BookingModal } from "@/components/ui/BookingModal";

const [isModalOpen, setIsModalOpen] = useState(false);

<Button onClick={() => setIsModalOpen(true)}>
  Schedule Consultation
</Button>

<BookingModal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
/>
```

## Integration Points

The Cal.com integration is currently used in:

1. **Header**: "Book a Call" button in the navigation
2. **Process Section**: "Schedule Discovery Call" CTA
3. **Services Section**: "Schedule a Demo" button
4. **Contact Section**: Quick booking card and modal

## Customization

### Styling

The Cal component can be styled using:

- Tailwind CSS classes via the `className` prop
- Custom CSS classes
- Inline styles

### Booking Types

Add or modify booking types in the `CAL_CONFIG.bookingTypes` object:

```typescript
bookingTypes: {
  custom: {
    name: "Custom Consultation",
    duration: "45 minutes",
    description: "Custom consultation for specific needs",
    calLink: "https://cal.com/your-username/custom-consultation",
  },
}
```

### Timezone

Update the timezone in both `defaultConfig` and `businessHours`:

```typescript
defaultConfig: {
  // ... other config
  timezone: "Europe/London", // Change to your timezone
},
businessHours: {
  timezone: "Europe/London", // Change to your timezone
  // ... hours config
}
```

## Troubleshooting

### Cal.com Script Not Loading

If the Cal.com embed script doesn't load:

1. Check your internet connection
2. Verify the Cal.com link is correct
3. Check browser console for errors
4. Ensure the script is not blocked by ad blockers

### Booking Modal Not Opening

If the booking modal doesn't open:

1. Check that the `isOpen` state is being set correctly
2. Verify the modal component is imported
3. Check for any CSS conflicts

### Custom Styling Issues

If custom styling isn't applying:

1. Ensure Tailwind CSS is properly configured
2. Check that className props are being passed correctly
3. Verify no conflicting CSS rules

## Best Practices

1. **Test Booking Flow**: Always test the complete booking flow before deploying
2. **Update Links**: Keep Cal.com links updated when you change event types
3. **Monitor Analytics**: Use Cal.com analytics to track booking performance
4. **Set Up Notifications**: Configure email notifications for new bookings
5. **Backup Calendar**: Set up calendar integrations for automatic scheduling

## Official Library Benefits

Using the official `@calcom/embed-react` library provides:

- **Automatic Updates**: Get the latest features and bug fixes
- **Better Performance**: Optimized for React applications
- **TypeScript Support**: Full type safety
- **Official Support**: Backed by the Cal.com team
- **Consistent API**: Follows Cal.com's official patterns

## Support

For Cal.com-specific issues:

- [Cal.com Documentation](https://developer.cal.com/)
- [Cal.com Support](https://cal.com/support)
- [@calcom/embed-react Documentation](https://developer.cal.com/docs/embed/embed-react)

For integration issues:

- Check the component documentation
- Review the configuration file
- Test with different Cal.com event types
