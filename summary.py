from textsum.summarize import Summarizer

summarizer = Summarizer() # loads default model and parameters

def read_file_as_string(file_path):
  with open(file_path, 'r') as file:
    file_content = file.read()
  return file_content

out_path = summarizer.summarize_file('./blah.txt')
print(f'summary saved to {out_path}')
