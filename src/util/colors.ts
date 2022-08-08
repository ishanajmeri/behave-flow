import { NodeCategory } from "../types";

export const colors: Record<string, [string, string, string]> = {
  red: ["bg-orange-700", "border-orange-700", "text-white"],
  green: ["bg-green-600", "border-green-600", "text-white"],
  purple: ["bg-purple-500", "border-purple-500", "text-white"],
  blue: ["bg-cyan-600", "border-cyan-600", "text-white"],
  gray: ["bg-gray-500", "border-gray-500", "text-white"],
  white: ["bg-white", "border-white", "text-gray-700"],
};

export const valueTypeColorMap: Record<string, string> = {
  flow: "white",
  number: "green",
  boolean: "red",
  string: "purple",
};

export const categoryColorMap: Record<NodeCategory, string> = {
  Event: "red",
  Logic: "green",
  State: "purple",
  Query: "purple",
  Action: "blue",
  Flow: "gray",
  Time: "gray",
  None: "gray",
};