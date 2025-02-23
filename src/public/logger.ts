import pretty from "pino-pretty";
import pino from "pino";

const stream = pretty({
  colorize: true
})

export const logger = pino(stream);
    