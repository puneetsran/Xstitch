class AddColoursToPatterns < ActiveRecord::Migration[5.2]
  def change
    add_column :patterns, :colours, :string, :array => true
  end
end
