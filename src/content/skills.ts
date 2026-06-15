import type { SkillGroup } from "./types";

const skill = (title: string, file: string) => ({
  title,
  image: `/skills/${file}`,
});

export const skillGroups: SkillGroup[] = [
  {
    id: "web-backend-cloud",
    label: "Web, backend & cloud",
    items: [
      skill("Python", "python.png"),
      skill("Django", "django.png"),
      skill("Flask", "flask.png"),
      skill("JavaScript", "js.png"),
      skill("Node.js", "node.png"),
      skill("PostgreSQL", "postgresql.png"),
      skill("MongoDB", "mongodb.png"),
      skill("MySQL", "sql.png"),
      skill("AWS", "aws.png"),
      skill("Docker", "docker.png"),
      skill("Kubernetes", "kubernetes.png"),
    ],
  },
  {
    id: "mobile",
    label: "Web & mobile",
    items: [
      skill("Flutter", "flutter.png"),
      skill("Dart", "dart.png"),
      skill("iOS", "ios.png"),
      skill("Swift", "swift.png"),
      skill("SwiftUI", "swiftui.png"),
      skill("Android", "android.png"),
      skill("Java", "java.png"),
      skill("Xcode", "xcode.png"),
      skill("Android Studio", "androidstudio.png"),
      skill("Firebase", "firebase.png"),
      skill("Appwrite", "appwrite.png"),
      skill("React Native", "reactnative.png"),
    ],
  },
  {
    id: "tools",
    label: "Tools & collaboration",
    items: [
      skill("Git", "git.png"),
      skill("GitHub", "github.png"),
      skill("Bitbucket", "bitbucket.png"),
      skill("Jira", "jira.png"),
      skill("GitLab", "gitlab.png"),
      skill("VS Code", "vscode.png"),
      skill("Postman", "postman.png"),
      skill("Teams", "teams.png"),
      skill("Slack", "slack.png"),
      skill("Zoom", "zoom.png"),
    ],
  },
];
