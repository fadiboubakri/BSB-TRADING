import os
import openai
from github import Github

# Initialize GitHub and OpenAI clients
g = Github(os.environ.get("GITHUB_TOKEN"))
openai.api_key = os.environ.get("OPENAI_API_KEY")

# Get pull request details
repo_name = os.environ.get("GITHUB_REPOSITORY")
pr_number = os.environ.get("GITHUB_REF").split("/")[2]

repo = g.get_user().get_repo(repo_name)
pull_request = repo.get_pull(int(pr_number))

def get_pull_request_diff(pull_request):
    return pull_request.get_files()

def generate_ai_review(diff_content):
    prompt = f"""Review the following code changes and provide constructive feedback. Focus on potential bugs, code style, best practices, and areas for improvement. If there are no issues, state that the code looks good. Provide your feedback in a concise manner.```\n{diff_content}\n```"""
    try:
        response = openai.chat.completions.create(
            model="gpt-4o",  # Or gpt-3.5-turbo, depending on your preference and access
            messages=[
                {"role": "system", "content": "You are a helpful AI assistant that reviews code."},
                {"role": "user", "content": prompt}
            ],
            max_tokens=1000
        )
        return response.choices[0].message.content
    except Exception as e:
        return f"Error generating AI review: {e}"

def post_review_comment(pull_request, comment):
    pull_request.create_issue_comment(comment)

if __name__ == "__main__":
    files = get_pull_request_diff(pull_request)
    diff_content = ""
    for file in files:
        patch = file.patch
        if patch:
            diff_content += f"File: {file.filename}\n{patch}\n\n"

    if diff_content:
        ai_review_comment = generate_ai_review(diff_content)
        post_review_comment(pull_request, ai_review_comment)
        print("AI code review posted successfully.")
    else:
        print("No code changes found to review.")
