'use client';

import { useTheme } from "next-themes";

export const CheckmarkIcon = () => {
    const { theme, systemTheme } = useTheme();

    const fillColor = theme === 'dark' ? '#FFFFFF' : theme === 'light' ? '#000000' : systemTheme;
    const foregroundColor = theme === 'dark' ? '#000000' : theme === 'light' ? '#FFFFFF' : systemTheme;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="32px" height="32px" viewBox="0 0 32 32" version="1.1">
            <g id="surface1">
                <path
                    stroke="none"
                    fillRule="nonzero"
                    fill={fillColor === 'light' ? '#000000' : fillColor === 'dark' ? '#FFFFFF' : fillColor}
                    fillOpacity={1}
                    d="M 16.511719 4.160156 C 16.601562 4.230469 16.6875 4.304688 16.769531 4.378906 C 17.238281 4.785156 17.789062 4.9375 18.398438 4.894531 C 18.652344 4.859375 18.890625 4.761719 19.132812 4.675781 C 19.648438 4.492188 20.179688 4.492188 20.683594 4.722656 C 20.925781 4.84375 21.125 4.988281 21.3125 5.183594 C 21.332031 5.203125 21.347656 5.222656 21.367188 5.238281 C 21.539062 5.425781 21.648438 5.65625 21.753906 5.882812 C 21.996094 6.40625 22.347656 6.785156 22.890625 7.007812 C 23.128906 7.09375 23.378906 7.109375 23.628906 7.132812 C 24.242188 7.195312 24.75 7.425781 25.152344 7.902344 C 25.417969 8.265625 25.570312 8.652344 25.574219 9.101562 C 25.585938 9.789062 25.640625 10.390625 26.140625 10.914062 C 26.3125 11.070312 26.507812 11.191406 26.710938 11.308594 C 27.167969 11.578125 27.492188 11.902344 27.679688 12.414062 C 27.691406 12.445312 27.699219 12.472656 27.710938 12.5 C 27.90625 13.132812 27.742188 13.703125 27.464844 14.273438 C 27.246094 14.722656 27.179688 15.222656 27.324219 15.707031 C 27.4375 16.015625 27.59375 16.296875 27.789062 16.5625 C 28.066406 16.984375 28.128906 17.527344 28.054688 18.019531 C 27.921875 18.652344 27.53125 19.074219 27.03125 19.453125 C 26.976562 19.488281 26.976562 19.488281 26.878906 19.519531 C 26.871094 19.550781 26.859375 19.582031 26.847656 19.617188 C 26.828125 19.617188 26.804688 19.617188 26.785156 19.617188 C 26.777344 19.632812 26.765625 19.652344 26.757812 19.671875 C 26.714844 19.75 26.667969 19.824219 26.613281 19.898438 C 26.386719 20.253906 26.285156 20.652344 26.316406 21.074219 C 26.316406 21.097656 26.320312 21.121094 26.320312 21.144531 C 26.328125 21.246094 26.335938 21.339844 26.351562 21.441406 C 26.445312 22.019531 26.308594 22.558594 25.984375 23.039062 C 25.609375 23.527344 25.144531 23.710938 24.566406 23.84375 C 24.035156 23.96875 23.582031 24.21875 23.261719 24.671875 C 23.109375 24.917969 23.019531 25.171875 22.929688 25.453125 C 22.757812 25.984375 22.4375 26.386719 21.941406 26.648438 C 21.351562 26.914062 20.824219 26.914062 20.210938 26.746094 C 19.714844 26.632812 19.1875 26.726562 18.753906 26.976562 C 18.53125 27.117188 18.351562 27.273438 18.183594 27.46875 C 17.800781 27.898438 17.304688 28.121094 16.738281 28.167969 C 16.175781 28.191406 15.667969 28.007812 15.257812 27.628906 C 15.230469 27.605469 15.207031 27.578125 15.179688 27.554688 C 14.785156 27.207031 14.265625 27.058594 13.75 27.074219 C 13.417969 27.105469 13.117188 27.21875 12.804688 27.335938 C 12.328125 27.507812 11.769531 27.460938 11.3125 27.253906 C 10.742188 26.972656 10.449219 26.539062 10.191406 25.976562 C 9.980469 25.515625 9.617188 25.191406 9.152344 24.992188 C 8.90625 24.90625 8.652344 24.867188 8.394531 24.84375 C 7.792969 24.785156 7.292969 24.582031 6.886719 24.113281 C 6.507812 23.640625 6.421875 23.085938 6.4375 22.492188 C 6.4375 21.949219 6.230469 21.449219 5.855469 21.054688 C 5.695312 20.90625 5.515625 20.800781 5.328125 20.691406 C 5.117188 20.570312 4.941406 20.429688 4.769531 20.257812 C 4.75 20.238281 4.734375 20.222656 4.714844 20.207031 C 4.378906 19.859375 4.230469 19.335938 4.210938 18.867188 C 4.222656 18.457031 4.355469 18.113281 4.535156 17.75 C 4.777344 17.261719 4.839844 16.722656 4.664062 16.195312 C 4.59375 15.996094 4.503906 15.824219 4.382812 15.648438 C 4.054688 15.148438 3.847656 14.632812 3.957031 14.019531 C 4.097656 13.378906 4.433594 12.972656 4.9375 12.574219 C 5.339844 12.253906 5.613281 11.84375 5.695312 11.328125 C 5.722656 11.019531 5.699219 10.714844 5.660156 10.40625 C 5.59375 9.851562 5.746094 9.335938 6.070312 8.882812 C 6.4375 8.441406 6.9375 8.234375 7.484375 8.125 C 8.007812 8.015625 8.441406 7.734375 8.765625 7.3125 C 8.925781 7.066406 9 6.796875 9.089844 6.519531 C 9.167969 6.28125 9.25 6.085938 9.40625 5.886719 C 9.425781 5.867188 9.441406 5.84375 9.457031 5.820312 C 9.75 5.449219 10.226562 5.203125 10.6875 5.121094 C 10.792969 5.109375 10.898438 5.109375 11.007812 5.109375 C 11.035156 5.109375 11.066406 5.109375 11.09375 5.109375 C 11.335938 5.113281 11.554688 5.15625 11.785156 5.21875 C 12.332031 5.359375 12.839844 5.238281 13.320312 4.964844 C 13.519531 4.839844 13.683594 4.695312 13.835938 4.515625 C 14.492188 3.75 15.679688 3.589844 16.511719 4.160156 Z M 16.511719 4.160156 "
                />

                <path
                    stroke="none"
                    fillRule="nonzero"
                    fill={foregroundColor === 'dark' ? '#000000' : foregroundColor === 'light' ? '#FFFFFF' : foregroundColor}
                    fillOpacity={1}
                    d="M 21.96875 11.03125 C 22.230469 11.152344 22.363281 11.332031 22.496094 11.585938 C 22.578125 11.832031 22.546875 12.117188 22.433594 12.351562 C 22.28125 12.574219 22.09375 12.761719 21.90625 12.949219 C 21.875 12.980469 21.84375 13.011719 21.816406 13.039062 C 21.734375 13.121094 21.652344 13.203125 21.574219 13.28125 C 21.488281 13.367188 21.402344 13.453125 21.320312 13.535156 C 21.175781 13.679688 21.035156 13.820312 20.894531 13.960938 C 20.730469 14.125 20.566406 14.289062 20.402344 14.453125 C 20.226562 14.628906 20.050781 14.804688 19.875 14.976562 C 19.824219 15.027344 19.773438 15.078125 19.726562 15.128906 C 19.632812 15.222656 19.539062 15.316406 19.445312 15.410156 C 19.417969 15.4375 19.386719 15.464844 19.359375 15.492188 C 19.25 15.601562 19.136719 15.710938 19.019531 15.8125 C 18.800781 16 18.605469 16.207031 18.402344 16.410156 C 18.355469 16.460938 18.308594 16.507812 18.261719 16.554688 C 18.15625 16.660156 18.054688 16.765625 17.949219 16.867188 C 17.789062 17.03125 17.625 17.195312 17.460938 17.359375 C 17.433594 17.386719 17.40625 17.414062 17.378906 17.445312 C 17.320312 17.5 17.265625 17.558594 17.207031 17.613281 C 16.828125 17.996094 16.449219 18.375 16.070312 18.757812 C 15.8125 19.015625 15.558594 19.273438 15.300781 19.53125 C 15.164062 19.667969 15.027344 19.804688 14.894531 19.941406 C 14.765625 20.070312 14.640625 20.199219 14.511719 20.324219 C 14.464844 20.371094 14.417969 20.417969 14.371094 20.464844 C 13.832031 21.015625 13.832031 21.015625 13.421875 21.042969 C 12.992188 21.019531 12.6875 20.699219 12.402344 20.410156 C 12.359375 20.367188 12.359375 20.367188 12.3125 20.324219 C 12.234375 20.246094 12.15625 20.164062 12.074219 20.085938 C 12.027344 20.039062 11.976562 19.988281 11.925781 19.9375 C 11.753906 19.765625 11.582031 19.59375 11.410156 19.421875 C 11.246094 19.257812 11.085938 19.097656 10.925781 18.9375 C 10.785156 18.800781 10.648438 18.664062 10.511719 18.523438 C 10.425781 18.441406 10.34375 18.359375 10.261719 18.277344 C 10.167969 18.1875 10.078125 18.09375 9.984375 18 C 9.960938 17.976562 9.933594 17.949219 9.902344 17.921875 C 9.621094 17.632812 9.492188 17.390625 9.492188 16.984375 C 9.496094 16.726562 9.601562 16.574219 9.769531 16.390625 C 9.976562 16.195312 10.214844 16.113281 10.496094 16.121094 C 10.976562 16.164062 11.3125 16.617188 11.628906 16.941406 C 11.695312 17.003906 11.761719 17.070312 11.824219 17.136719 C 11.964844 17.273438 12.101562 17.410156 12.238281 17.550781 C 12.398438 17.710938 12.558594 17.871094 12.71875 18.03125 C 12.78125 18.097656 12.847656 18.160156 12.910156 18.226562 C 12.949219 18.265625 12.988281 18.304688 13.027344 18.34375 C 13.054688 18.371094 13.054688 18.371094 13.082031 18.398438 C 13.226562 18.546875 13.226562 18.546875 13.417969 18.605469 C 13.566406 18.589844 13.609375 18.546875 13.714844 18.441406 C 13.742188 18.417969 13.742188 18.417969 13.765625 18.390625 C 13.828125 18.332031 13.890625 18.269531 13.953125 18.207031 C 14 18.160156 14.050781 18.109375 14.101562 18.058594 C 14.265625 17.898438 14.429688 17.730469 14.59375 17.566406 C 14.679688 17.480469 14.765625 17.394531 14.851562 17.308594 C 14.980469 17.179688 15.109375 17.050781 15.238281 16.921875 C 15.492188 16.664062 15.746094 16.410156 16 16.15625 C 16.039062 16.117188 16.082031 16.074219 16.121094 16.035156 C 16.179688 15.976562 16.242188 15.914062 16.300781 15.851562 C 16.53125 15.625 16.757812 15.394531 16.988281 15.167969 C 17.007812 15.144531 17.027344 15.125 17.050781 15.101562 C 17.386719 14.765625 17.726562 14.425781 18.0625 14.085938 C 18.410156 13.734375 18.761719 13.386719 19.109375 13.039062 C 19.324219 12.824219 19.535156 12.609375 19.75 12.394531 C 19.898438 12.246094 20.042969 12.097656 20.191406 11.953125 C 20.277344 11.867188 20.359375 11.78125 20.445312 11.695312 C 20.535156 11.605469 20.628906 11.511719 20.71875 11.421875 C 20.746094 11.394531 20.773438 11.367188 20.800781 11.339844 C 21.132812 11.011719 21.507812 10.859375 21.96875 11.03125 Z M 21.96875 11.03125 "
                />
            </g>
        </svg>
    );
};