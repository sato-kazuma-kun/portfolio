'use client';

import { useTheme } from "next-themes";

const Experience = ({ color }: { color?: string; }) => {
    const { theme, systemTheme } = useTheme();

    const fillColor = theme === 'dark' ? '#FFFFFF' : theme === 'light' ? '#000000' : systemTheme;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="32px" height="32px" viewBox="0 0 32 32" version="1.1">
            <g id="surface1">
                <path fill={color ? color : fillColor === 'light' ? '#000000' : fillColor === 'dark' ? '#FFFFFF' : fillColor} d="M 16.640625 3.378906 C 16.984375 3.574219 17.261719 3.84375 17.546875 4.121094 C 17.792969 4.347656 17.996094 4.527344 18.332031 4.570312 C 18.632812 4.558594 18.925781 4.484375 19.21875 4.421875 C 19.757812 4.308594 20.363281 4.25 20.851562 4.550781 C 21.265625 4.867188 21.433594 5.296875 21.597656 5.777344 C 21.621094 5.847656 21.621094 5.847656 21.648438 5.921875 C 21.679688 6.015625 21.710938 6.113281 21.738281 6.210938 C 21.839844 6.515625 21.941406 6.710938 22.207031 6.910156 C 22.410156 7 22.621094 7.066406 22.832031 7.132812 C 24.011719 7.523438 24.011719 7.523438 24.324219 8.109375 C 24.53125 8.609375 24.425781 9.132812 24.320312 9.648438 C 24.1875 10.203125 24.1875 10.203125 24.257812 10.753906 C 24.363281 10.886719 24.464844 11.003906 24.589844 11.125 C 25.054688 11.609375 25.5 12.125 25.546875 12.828125 C 25.519531 13.535156 25.058594 14.011719 24.585938 14.492188 C 24.398438 14.683594 24.253906 14.839844 24.191406 15.105469 C 24.199219 15.285156 24.199219 15.285156 24.238281 15.476562 C 24.257812 15.585938 24.257812 15.585938 24.277344 15.695312 C 24.292969 15.773438 24.304688 15.855469 24.320312 15.9375 C 24.527344 17.195312 24.527344 17.195312 24.238281 17.671875 C 23.78125 18.265625 23.042969 18.46875 22.351562 18.671875 C 22.136719 18.753906 22.019531 18.816406 21.886719 19.007812 C 21.917969 19.289062 22.03125 19.542969 22.140625 19.800781 C 22.160156 19.847656 22.179688 19.894531 22.199219 19.945312 C 22.261719 20.101562 22.328125 20.257812 22.390625 20.410156 C 22.4375 20.523438 22.484375 20.632812 22.53125 20.746094 C 22.628906 20.980469 22.726562 21.21875 22.824219 21.457031 C 22.976562 21.824219 23.128906 22.1875 23.277344 22.554688 C 23.328125 22.679688 23.378906 22.800781 23.429688 22.925781 C 23.457031 22.988281 23.480469 23.046875 23.507812 23.109375 C 23.585938 23.296875 23.660156 23.480469 23.738281 23.667969 C 24.121094 24.597656 24.503906 25.527344 24.886719 26.457031 C 24.90625 26.507812 24.925781 26.554688 24.945312 26.605469 C 24.984375 26.699219 25.019531 26.789062 25.058594 26.882812 C 25.144531 27.085938 25.226562 27.292969 25.316406 27.496094 C 25.34375 27.5625 25.375 27.632812 25.402344 27.703125 C 25.429688 27.761719 25.457031 27.816406 25.480469 27.878906 C 25.566406 28.117188 25.554688 28.242188 25.472656 28.480469 C 25.371094 28.636719 25.371094 28.636719 25.214844 28.734375 C 24.730469 28.8125 24.367188 28.597656 23.945312 28.378906 C 23.820312 28.3125 23.695312 28.25 23.570312 28.183594 C 23.347656 28.070312 23.125 27.957031 22.902344 27.84375 C 22.546875 27.660156 22.191406 27.476562 21.835938 27.292969 C 21.710938 27.230469 21.589844 27.167969 21.464844 27.101562 C 21.390625 27.0625 21.316406 27.023438 21.238281 26.984375 C 21.136719 26.933594 21.136719 26.933594 21.039062 26.882812 C 20.847656 26.808594 20.789062 26.800781 20.609375 26.878906 C 20.46875 26.957031 20.46875 26.957031 20.328125 27.058594 C 20.273438 27.09375 20.21875 27.132812 20.164062 27.171875 C 20.105469 27.210938 20.046875 27.25 19.984375 27.292969 C 19.859375 27.375 19.734375 27.460938 19.609375 27.546875 C 19.414062 27.679688 19.214844 27.8125 19.019531 27.945312 C 18.832031 28.078125 18.640625 28.203125 18.449219 28.332031 C 18.390625 28.371094 18.332031 28.414062 18.273438 28.453125 C 17.8125 28.761719 17.8125 28.761719 17.515625 28.785156 C 17.269531 28.734375 17.171875 28.679688 17.027344 28.476562 C 16.898438 28.238281 16.816406 27.988281 16.734375 27.734375 C 16.714844 27.675781 16.695312 27.617188 16.675781 27.554688 C 16.632812 27.433594 16.59375 27.308594 16.554688 27.183594 C 16.492188 26.996094 16.429688 26.804688 16.367188 26.617188 C 16.328125 26.496094 16.289062 26.378906 16.25 26.257812 C 16.222656 26.171875 16.222656 26.171875 16.191406 26.085938 C 16.175781 26.03125 16.160156 25.980469 16.140625 25.925781 C 16.125 25.878906 16.109375 25.835938 16.097656 25.785156 C 16.0625 25.664062 16.0625 25.664062 16.0625 25.472656 C 16.023438 25.472656 15.980469 25.472656 15.9375 25.472656 C 15.929688 25.523438 15.925781 25.574219 15.917969 25.625 C 15.859375 25.921875 15.757812 26.191406 15.652344 26.476562 C 15.628906 26.535156 15.605469 26.59375 15.585938 26.652344 C 15.539062 26.777344 15.492188 26.898438 15.445312 27.023438 C 15.371094 27.210938 15.300781 27.402344 15.230469 27.589844 C 15.1875 27.710938 15.140625 27.832031 15.09375 27.949219 C 15.0625 28.035156 15.0625 28.035156 15.03125 28.121094 C 15.011719 28.175781 14.992188 28.226562 14.96875 28.28125 C 14.953125 28.328125 14.933594 28.375 14.917969 28.421875 C 14.832031 28.574219 14.742188 28.644531 14.59375 28.734375 C 14.097656 28.816406 13.832031 28.613281 13.4375 28.332031 C 13.378906 28.292969 13.320312 28.25 13.257812 28.207031 C 13.070312 28.078125 12.878906 27.945312 12.691406 27.8125 C 12.503906 27.679688 12.3125 27.546875 12.125 27.417969 C 12.003906 27.335938 11.886719 27.253906 11.769531 27.171875 C 11.71875 27.132812 11.664062 27.097656 11.609375 27.058594 C 11.539062 27.007812 11.539062 27.007812 11.46875 26.957031 C 11.304688 26.867188 11.195312 26.828125 11.007812 26.816406 C 10.820312 26.878906 10.820312 26.878906 10.628906 26.984375 C 10.550781 27.023438 10.476562 27.0625 10.398438 27.101562 C 10.359375 27.121094 10.320312 27.144531 10.277344 27.164062 C 10.152344 27.230469 10.027344 27.296875 9.902344 27.359375 C 9.589844 27.519531 9.277344 27.679688 8.964844 27.84375 C 8.699219 27.980469 8.4375 28.113281 8.171875 28.25 C 8.050781 28.3125 7.925781 28.378906 7.804688 28.441406 C 7.101562 28.804688 7.101562 28.804688 6.65625 28.734375 C 6.496094 28.644531 6.496094 28.644531 6.398438 28.480469 C 6.347656 28.078125 6.425781 27.761719 6.589844 27.398438 C 6.609375 27.351562 6.628906 27.304688 6.652344 27.257812 C 6.695312 27.15625 6.738281 27.058594 6.78125 26.957031 C 6.878906 26.742188 6.972656 26.523438 7.0625 26.308594 C 7.113281 26.195312 7.160156 26.082031 7.210938 25.972656 C 7.449219 25.417969 7.675781 24.859375 7.898438 24.300781 C 8.289062 23.332031 8.6875 22.367188 9.089844 21.40625 C 9.195312 21.148438 9.300781 20.894531 9.40625 20.640625 C 9.476562 20.46875 9.546875 20.300781 9.621094 20.128906 C 9.667969 20.011719 9.714844 19.898438 9.765625 19.78125 C 9.796875 19.703125 9.796875 19.703125 9.832031 19.621094 C 9.921875 19.40625 9.984375 19.246094 9.980469 19.011719 C 9.90625 18.851562 9.855469 18.8125 9.695312 18.742188 C 9.648438 18.722656 9.601562 18.703125 9.554688 18.679688 C 9.328125 18.59375 9.097656 18.515625 8.863281 18.441406 C 8.285156 18.246094 7.855469 18.019531 7.550781 17.472656 C 7.382812 16.964844 7.464844 16.359375 7.589844 15.847656 C 7.722656 15.339844 7.722656 15.339844 7.617188 14.847656 C 7.433594 14.628906 7.242188 14.425781 7.042969 14.222656 C 6.660156 13.828125 6.394531 13.382812 6.375 12.828125 C 6.386719 12.074219 6.8125 11.644531 7.3125 11.132812 C 7.511719 10.921875 7.671875 10.75 7.6875 10.445312 C 7.683594 10.382812 7.675781 10.320312 7.667969 10.257812 C 7.660156 10.1875 7.652344 10.121094 7.644531 10.050781 C 7.621094 9.890625 7.589844 9.738281 7.546875 9.578125 C 7.417969 9.039062 7.390625 8.421875 7.679688 7.9375 C 8.066406 7.484375 8.546875 7.261719 9.105469 7.09375 C 9.203125 7.0625 9.304688 7.027344 9.40625 6.996094 C 9.449219 6.984375 9.492188 6.96875 9.539062 6.957031 C 9.675781 6.910156 9.796875 6.859375 9.921875 6.785156 C 9.992188 6.625 10.054688 6.476562 10.109375 6.3125 C 10.140625 6.21875 10.175781 6.125 10.207031 6.035156 C 10.222656 5.988281 10.238281 5.941406 10.257812 5.894531 C 10.324219 5.703125 10.398438 5.519531 10.472656 5.332031 C 10.496094 5.273438 10.519531 5.214844 10.542969 5.15625 C 10.730469 4.773438 10.957031 4.601562 11.328125 4.414062 C 11.859375 4.253906 12.414062 4.359375 12.945312 4.476562 C 13.464844 4.585938 13.464844 4.585938 13.957031 4.4375 C 14.117188 4.308594 14.269531 4.175781 14.417969 4.03125 C 15.050781 3.417969 15.75 2.992188 16.640625 3.378906 Z M 15.179688 4.886719 C 14.535156 5.480469 14.074219 5.671875 13.199219 5.640625 C 12.878906 5.621094 12.570312 5.546875 12.257812 5.476562 C 11.945312 5.425781 11.945312 5.425781 11.648438 5.503906 C 11.382812 5.855469 11.28125 6.328125 11.160156 6.742188 C 11.015625 7.203125 10.84375 7.539062 10.421875 7.789062 C 10.054688 7.976562 9.671875 8.09375 9.28125 8.21875 C 8.871094 8.34375 8.871094 8.34375 8.574219 8.640625 C 8.554688 8.800781 8.554688 8.800781 8.585938 8.972656 C 8.597656 9.066406 8.597656 9.066406 8.609375 9.160156 C 8.636719 9.316406 8.667969 9.464844 8.707031 9.617188 C 8.835938 10.152344 8.878906 10.8125 8.613281 11.3125 C 8.425781 11.578125 8.199219 11.808594 7.976562 12.046875 C 7.785156 12.25 7.625 12.429688 7.488281 12.671875 C 7.503906 12.988281 7.59375 13.132812 7.8125 13.355469 C 8.429688 14.011719 8.796875 14.5 8.785156 15.414062 C 8.769531 15.761719 8.695312 16.089844 8.617188 16.425781 C 8.574219 16.640625 8.542969 16.808594 8.574219 17.023438 C 8.816406 17.292969 9.121094 17.367188 9.457031 17.46875 C 10.132812 17.683594 10.625 17.871094 11.007812 18.496094 C 11.113281 18.730469 11.195312 18.972656 11.277344 19.214844 C 11.316406 19.339844 11.359375 19.464844 11.402344 19.589844 C 11.421875 19.644531 11.4375 19.699219 11.457031 19.753906 C 11.523438 19.914062 11.589844 20.03125 11.710938 20.160156 C 12.082031 20.203125 12.402344 20.140625 12.765625 20.0625 C 13.417969 19.925781 13.929688 19.886719 14.527344 20.222656 C 14.828125 20.441406 15.105469 20.683594 15.375 20.9375 C 15.441406 20.996094 15.441406 20.996094 15.507812 21.058594 C 15.542969 21.097656 15.582031 21.132812 15.621094 21.171875 C 15.804688 21.285156 15.914062 21.28125 16.128906 21.246094 C 16.277344 21.144531 16.402344 21.042969 16.535156 20.921875 C 16.609375 20.855469 16.683594 20.789062 16.757812 20.726562 C 16.792969 20.695312 16.828125 20.664062 16.863281 20.628906 C 17.316406 20.226562 17.757812 19.929688 18.382812 19.949219 C 18.617188 19.972656 18.84375 20.019531 19.070312 20.0625 C 19.613281 20.171875 19.613281 20.171875 20.160156 20.160156 C 20.4375 19.898438 20.519531 19.570312 20.632812 19.214844 C 21.011719 18.089844 21.011719 18.089844 21.589844 17.78125 C 21.960938 17.609375 22.347656 17.476562 22.738281 17.351562 C 23.0625 17.25 23.0625 17.25 23.296875 17.023438 C 23.335938 16.679688 23.273438 16.382812 23.199219 16.042969 C 23.0625 15.386719 23.003906 14.808594 23.359375 14.207031 C 23.539062 13.984375 23.738281 13.777344 23.9375 13.566406 C 24.027344 13.46875 24.113281 13.371094 24.199219 13.269531 C 24.238281 13.226562 24.273438 13.183594 24.3125 13.140625 C 24.421875 12.914062 24.386719 12.78125 24.320312 12.542969 C 24.214844 12.40625 24.117188 12.296875 23.992188 12.175781 C 23.425781 11.59375 23.085938 11.089844 23.089844 10.265625 C 23.109375 9.957031 23.183594 9.664062 23.253906 9.363281 C 23.308594 9.082031 23.328125 8.859375 23.296875 8.574219 C 23.132812 8.421875 22.964844 8.347656 22.753906 8.277344 C 22.671875 8.25 22.671875 8.25 22.585938 8.222656 C 22.472656 8.1875 22.359375 8.148438 22.246094 8.113281 C 21.644531 7.914062 21.1875 7.671875 20.863281 7.105469 C 20.769531 6.890625 20.699219 6.675781 20.628906 6.453125 C 20.484375 5.945312 20.484375 5.945312 20.222656 5.503906 C 19.925781 5.40625 19.699219 5.457031 19.398438 5.53125 C 18.734375 5.679688 17.984375 5.789062 17.371094 5.429688 C 17.105469 5.230469 16.867188 5.007812 16.632812 4.777344 C 16.007812 4.203125 15.746094 4.367188 15.179688 4.886719 Z M 15.179688 4.886719 " />
                <path fill={color ? color : fillColor === 'light' ? '#000000' : fillColor === 'dark' ? '#FFFFFF' : fillColor} d="M 20.34375 8.132812 C 20.925781 8.664062 21.339844 9.285156 21.695312 9.984375 C 21.730469 10.054688 21.765625 10.125 21.804688 10.195312 C 22.492188 11.65625 22.542969 13.410156 22.011719 14.933594 C 21.398438 16.59375 20.238281 17.878906 18.648438 18.648438 C 17.023438 19.351562 15.214844 19.429688 13.558594 18.785156 C 11.921875 18.113281 10.71875 16.867188 10.003906 15.25 C 9.386719 13.699219 9.359375 11.917969 9.996094 10.359375 C 10.28125 9.710938 10.65625 9.101562 11.136719 8.574219 C 11.191406 8.515625 11.246094 8.453125 11.304688 8.390625 C 13.734375 5.789062 17.753906 5.839844 20.34375 8.132812 Z M 20.34375 8.132812 " />
            </g>
        </svg>
    );
};

export default Experience;
