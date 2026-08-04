// Content + scoring for the patient self-screening questionnaires
// (/eligibility-check).
//
// The six checklists, their intros, their questions and their result wording are
// taken verbatim from the clinic's printed packet
// ("Patient Self-Screening Questionnaires"). Do not reword the `intro`,
// `questions` or `benefit` strings without a matching change to the paper form —
// front desk staff score both against the same 4-of-6 rule.
//
// This is a screening tool, not a diagnosis — every outcome ends with a human
// step (book a visit or call the clinic).

/** A YES to 4 or more questions in a section flags that section. */
export const YES_THRESHOLD = 4;

export type Answer = "yes" | "no";

export type ScreeningQuestion = {
  /** `${categoryId}-${position}`, e.g. "balance-1". */
  id: string;
  text: string;
};

export type ScreeningCategory = {
  id: string;
  /** Section number on the printed packet. */
  number: number;
  title: string;
  /** How to answer this section — verbatim from the packet. */
  intro: string;
  /** Plain-language descriptor shown on the "which of these apply" step. */
  pickerHint: string;
  questions: readonly ScreeningQuestion[];
  /**
   * Completes "you would likely benefit from …" in the result box, so the
   * article ("physical therapy focused on …" vs "a structured … program") is
   * part of the string.
   */
  benefit: string;
  /** Service page the result box links to. */
  recommendation: { title: string; href: string };
};

/** Attaches ids so the question text stays the only thing authored below. */
function section(
  category: Omit<ScreeningCategory, "questions"> & {
    questions: readonly string[];
  },
): ScreeningCategory {
  return {
    ...category,
    questions: category.questions.map((text, index) => ({
      id: `${category.id}-${index + 1}`,
      text,
    })),
  };
}

export const categories: readonly ScreeningCategory[] = [
  section({
    id: "balance",
    number: 1,
    title: "Balance & Fall Risk",
    intro: "Answer honestly based on how you feel over the past month.",
    pickerHint:
      "Unsteadiness, dizziness, holding onto furniture, or a recent fall",
    questions: [
      "Are you afraid of falling or losing your balance when you get out of a car?",
      "Do you feel unsteady or nervous walking on uneven ground, like grass, gravel, or curbs?",
      "Are you afraid of going up or down stairs?",
      "Do you hold onto walls, furniture, or another person to feel steady while walking?",
      "Have you fallen, or come close to falling, in the past year?",
      "Do you feel dizzy or lightheaded when you stand up quickly?",
    ],
    benefit:
      "physical therapy focused on balance training and fall prevention",
    recommendation: {
      title: "Balance & Fall Prevention Training",
      href: "/services/balance-and-fall-prevention-training",
    },
  }),
  section({
    id: "low-back",
    number: 2,
    title: "Low Back Pain",
    intro: "Answer based on your back pain over the past month.",
    pickerHint: "Pain or stiffness in your lower back, hip, buttock, or leg",
    questions: [
      "Do you have pain after sitting for more than 20 to 30 minutes?",
      "Do you have pain after standing in one place for a long period of time?",
      "Is it painful or difficult to bend down to tie your shoes or pick something up off the floor?",
      "Do you have pain or stiffness when you first get out of bed in the morning?",
      "Does your pain travel into your hip, buttock, or down your leg?",
      "Has back pain caused you to avoid or give up an activity you used to enjoy, like walking, gardening, or exercise?",
    ],
    benefit: "physical therapy focused on low back pain and core stability",
    recommendation: {
      title: "Orthopedic Rehabilitation",
      href: "/services/orthopedic-rehabilitation",
    },
  }),
  section({
    id: "neck-shoulder",
    number: 3,
    title: "Neck & Shoulder Pain",
    intro:
      "Answer based on your neck or shoulder symptoms over the past month.",
    pickerHint:
      "Stiff neck, limited reaching overhead, headaches, or arm numbness",
    questions: [
      "Is it painful or stiff to turn your head to check your blind spot while driving?",
      "Is it painful or difficult to reach overhead, like to a shelf, cabinet, or putting on a jacket?",
      "Do you get frequent headaches that seem to start at the back of your neck?",
      "Does neck or shoulder pain wake you up at night or make it hard to get comfortable while sleeping?",
      "Do you feel numbness, tingling, or weakness in your arm or hand?",
      "Has neck or shoulder pain made it difficult to work at a computer or use your phone?",
    ],
    benefit:
      "physical therapy focused on neck and shoulder mobility and pain relief",
    recommendation: {
      title: "Hands-On Manual Therapy",
      href: "/services/hands-on-manual-therapy",
    },
  }),
  section({
    id: "knee-hip",
    number: 4,
    title: "Knee & Hip Pain",
    intro: "Answer based on your knee or hip symptoms over the past month.",
    pickerHint:
      "Trouble with stairs, standing up from a chair, walking, or swelling",
    questions: [
      "Do you have pain or stiffness going up or down stairs?",
      "Is it painful or difficult to get up from a low chair, couch, or the toilet?",
      "Does your knee or hip feel like it catches, locks, or gives way?",
      "Does pain limit how far or how long you are able to walk?",
      "Do you notice swelling in your knee or hip after activity?",
      "Has knee or hip pain caused you to stop or avoid an activity you used to enjoy, like walking, golf, or gardening?",
    ],
    benefit: "physical therapy focused on knee and hip strength and mobility",
    recommendation: {
      title: "Orthopedic Rehabilitation",
      href: "/services/orthopedic-rehabilitation",
    },
  }),
  section({
    id: "post-surgical",
    number: 5,
    title: "Post-Surgical Recovery",
    intro: "Answer based on how your recovery has felt since surgery.",
    pickerHint:
      "Recovering from an operation and not back to full motion or strength",
    questions: [
      "Has it been difficult to regain full motion in the area that was operated on?",
      "Does that area feel weaker now than it did before your surgery?",
      "Are you unsure whether you are doing your home exercises correctly?",
      "Does it feel like your recovery has slowed down or reached a plateau?",
      "Is swelling, stiffness, or scar tightness limiting your movement?",
      "Are you hesitant to return to your normal activities because you are afraid of getting hurt again?",
    ],
    benefit: "a structured post-surgical rehabilitation program",
    recommendation: {
      title: "Post-Surgical Recovery",
      href: "/services/post-surgical-recovery",
    },
  }),
  section({
    id: "sports",
    number: 6,
    title: "Sports & Activity-Related Injury",
    intro:
      "Answer based on an injury affecting your sport, exercise, or physical activity.",
    pickerHint:
      "An injury holding you back from training, competing, or exercising",
    questions: [
      "Does pain limit how hard or how long you can practice, train, or compete?",
      "Have you changed your technique or form to avoid pain?",
      "Does the injured area feel weaker or less stable than the uninjured side?",
      "Have you had this same injury, or a similar one, before?",
      "Are you unsure when it is safe to return to your sport or activity?",
      "Has this injury kept you out of a game, practice, or activity you wanted to take part in?",
    ],
    benefit: "a sports rehabilitation and return-to-activity program",
    recommendation: {
      title: "Sports Injury Management",
      href: "/services/sports-injury-management",
    },
  }),
] as const;

/** Answers keyed by question id — see `ScreeningQuestion.id`. */
export type Answers = Record<string, Answer>;

export type CategoryScore = {
  category: ScreeningCategory;
  /** Every question in the section paired with what the patient answered. */
  responses: readonly { question: ScreeningQuestion; answer: Answer }[];
  yesCount: number;
  total: number;
  /**
   * YES to 4 or more. Deliberately not called "flagged" or "failed" — the
   * patient-facing wording stays clinical: at or above the threshold, physical
   * therapy is indicated; below it, we simply report the count.
   */
  meetsThreshold: boolean;
};

export type ScreeningResult = {
  /** One entry per checklist the patient completed, in packet order. */
  scores: readonly CategoryScore[];
  /** The subset that reached the 4-YES threshold. */
  indicated: readonly CategoryScore[];
};

export function categoryById(id: string) {
  return categories.find((category) => category.id === id);
}

/** Selected ids in packet order, ignoring anything unrecognised. */
export function orderedCategories(selectedIds: readonly string[]) {
  return categories.filter((category) => selectedIds.includes(category.id));
}

/** True once every question in the section has a YES or NO. */
export function isSectionComplete(
  category: ScreeningCategory,
  answers: Answers,
) {
  return category.questions.every((question) => Boolean(answers[question.id]));
}

export function scoreCategory(
  category: ScreeningCategory,
  answers: Answers,
): CategoryScore {
  // A section is only scored once it's complete, so an unanswered question can
  // only mean the caller skipped validation — count it as NO rather than throw.
  const responses = category.questions.map((question) => ({
    question,
    answer: answers[question.id] ?? "no",
  }));
  const yesCount = responses.filter(
    (response) => response.answer === "yes",
  ).length;

  return {
    category,
    responses,
    yesCount,
    total: responses.length,
    meetsThreshold: yesCount >= YES_THRESHOLD,
  };
}

export function evaluateScreening(
  selectedIds: readonly string[],
  answers: Answers,
): ScreeningResult {
  const scores = orderedCategories(selectedIds).map((category) =>
    scoreCategory(category, answers),
  );

  return {
    scores,
    indicated: scores.filter((score) => score.meetsThreshold),
  };
}

/**
 * The result-box sentence for a section at or above the threshold — the
 * packet's wording, stated as a clinical finding rather than a verdict.
 */
export function resultSentence(score: CategoryScore) {
  return `You answered YES to ${score.yesCount} of ${score.total} questions, so you would benefit from ${score.category.benefit}.`;
}
