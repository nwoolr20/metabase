import * as ML from "cljs/metabase.lib.js";
import type { BreakoutClause, ColumnMetadata, Query } from "./types";

export function breakoutableColumns(
  query: Query,
  stageIndex: number,
): ColumnMetadata[] {
  return ML.breakoutable_columns(query, stageIndex);
}

export function breakouts(query: Query, stageIndex: number): BreakoutClause[] {
  return ML.breakouts(query, stageIndex);
}

export function breakout(
  query: Query,
  stageIndex: number,
  column: ColumnMetadata,
): Query {
  return ML.breakout(query, stageIndex, column);
}
