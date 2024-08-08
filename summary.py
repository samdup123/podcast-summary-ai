from transformers import pipeline

def read_file_as_string(file_path):
  with open(file_path, 'r') as file:
    file_content = file.read()
  return file_content

summarizer = pipeline("summarization", model="Falconsai/text_summarization")

print(summarizer(read_file_as_string('./blah.txt'), max_length=2000, min_length=1200, do_sample=False))
