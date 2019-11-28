class AddColoursToPatterns < ActiveRecord::Migration[5.2]
  def change
    add_column :patterns, :colours, :jsonb
  end
end
